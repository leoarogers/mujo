class CheckoutController < ApplicationController
	skip_before_filter  :verify_authenticity_token

	def index
		if session[:item]
			counter = 0
			session[:item].each{|x| counter += x['amount'].to_i}
			@price = counter * 50
			if session[:address_to]['state'] == "ny" || session[:address_to]['state'] == "NY" || session[:address_to]['state'] == "Ny" || session[:address_to]['state'] == "nY"
				@tax = ((@price + 5)*0.08875).round(2)
			else
				@tax = 0
			end
			@order_total = (@tax + @price + 5).round(2)
			# separate display total string to account for trailing 0s
			@display_total = format('%.2f', @order_total)
			redirect_to shop_index_path(anchor: 'middle_half') if @price == 0
		else
			raise ActionController::RoutingError.new('Not Found')
		end
	end

	def create
		session[:complete] = true
		
		# STRIPE PAYMENT

		# Set your secret key: remember to change this to your live secret key in production
		Stripe.api_key = "sk_live_do23yW0yPbn7veuAqBq4pM66"
		# Stripe.api_key = "sk_test_pcgoDe3sWoc3lGE2tjlyzDst"

		# Get the credit card details submitted by the form
		token = params[:stripeToken]

		# Get order total amount from params (in cents)
		amount = (params[:order_total].to_f * 100).to_i

		# Create the charge on Stripe's servers (this will charge the user's card!!!)
		number_of_units = 0
		session[:item].each{|x| number_of_units += x['amount'].to_i}

		shopping_cart = session[:item]
		all_items = Hash.new(0)
		shopping_cart.each do |item|
			puts item['color']
			puts item['size']
			if item['color'] == "White" && item['size'].split.first == "S"
				all_items[:white_small] += item['amount'].to_i
			elsif item['color'] == "White" && item['size'].split.first == "M"
				all_items[:white_medium] += item['amount'].to_i
			elsif item['color'] == "White" && item['size'].split.first == "L"
				all_items[:white_large] += item['amount'].to_i
			elsif item['color'] == "Black" && item['size'].split.first == "S"
				all_items[:black_small] += item['amount'].to_i
			elsif item['color'] == "Black" && item['size'].split.first == "M"
				all_items[:black_medium] += item['amount'].to_i
			elsif item['color'] == "Black" && item['size'].split.first == "L"
				all_items[:black_large] += item['amount'].to_i
			end
		end

		begin
		  charge = Stripe::Charge.create(
		    :amount => amount, # amount in cents, again
		    :currency => "usd",
		    :source => token,
		    :description => "The Isan Beaded Bracelet: #{number_of_units}",
		    :receipt_email => session[:address_to]['email'],
		    :metadata => {
		    	email: session[:address_to]['email'],
		    	name: session[:address_to]['name'],
		    	phone: session[:address_to]['phone'],
		    	white_small: all_items[:white_small],
		    	white_medium: all_items[:white_medium],
		    	white_large: all_items[:white_large],
		    	black_small: all_items[:black_small],
		    	black_medium: all_items[:black_medium],
		    	black_large: all_items[:black_large]
		    }
		  )
		rescue Stripe::CardError => e
		  # The card has been declined
		end

		# SHIPPO API CALL

		Shippo::api_token = 'c8182218ae6f0517b79282c0ce455174758eb70d'

		# set weight depending on how many items are in the cart
		counter = 0
		session[:item].each{|x| counter+= x['amount'].to_i}
		item_count = counter
		item_count == 1 ? weight = 3 : weight = 5

		# Create parcel object
		parcel = {
		  :length => 9,
		  :width => 6.5,
		  :height => 1.5,
		  :distance_unit => :in,
		  :weight => weight,
		  :mass_unit => :oz}

		# Creating the shipment object
		puts "Creating shipment object.."
		shipment = Shippo::Shipment.create(
		  :object_purpose => 'PURCHASE',
		  :submission_type => 'DROPOFF',
		  :address_from => session[:address_from],
		  :address_to => session[:address_to],
		  :parcel => parcel)

		puts "Shipment created. Waiting for rates to be generated.."

		# Wait for rates to be generated
		timeout_rates_request = 25 # seconds
		while ["QUEUED","WAITING"].include? shipment.object_status do
		  Timeout::timeout(timeout_rates_request) do
		    shipment = Shippo::Shipment.get(shipment["object_id"])
		  end
		end

		# Get all rates for shipment.
		rates = shipment.rates()

		# Get the first rate in the rates results
		rate = rates[0]

		puts "Rates generated. Purchasing a #{rate.provider} #{rate.servicelevel_name} label"

		# Purchase the desired rate (create a Transaction object)
		transaction = Shippo::Transaction.create(:rate => rate["object_id"])

		# Wait for transaction to be proccessed
		timeout_label_request = 25 # seconds
		while ["QUEUED","WAITING"].include? transaction.object_status do
		  Timeout::timeout(timeout_label_request) do
		    transaction = Shippo::Transaction.get(transaction["object_id"])
		  end
		end

		# label_url and tracking_number
		if transaction.object_status == "SUCCESS"
		  puts "Label sucessfully generated:"
		  puts "label_url: #{transaction.label_url}" 
		  puts "tracking_number: #{transaction.tracking_number}" 
		else
		  puts "Error generating label:"
		  puts transaction.messages
		end
		redirect_to confirmation_index_path
	end

end