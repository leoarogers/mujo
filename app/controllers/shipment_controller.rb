class ShipmentController < ApplicationController
	skip_before_filter  :verify_authenticity_token

	def index
		if session[:item]
			counter = 0
			session[:item].each{|x| counter += x['amount'].to_i}
			redirect_to shop_index_path(anchor: 'middle_half') if counter == 0
		else
			raise ActionController::RoutingError.new('Not Found')
		end
	end

	def create
		# MujoNYC ShippoToken key (private auth token)
		Shippo::api_token = 'c8182218ae6f0517b79282c0ce455174758eb70d'

		# Create address_from object
		address_from = {
		  :object_purpose => 'PURCHASE',
		  :name => 'Mujo NYC',
		  :street1 => 'Broadway',
		  :street_no => '230',
		  :street2 => '',
		  :city => 'Brooklyn',
		  :state => 'NY',
		  :zip => '11211',
		  :country => 'US',
		  :phone => '+1 650 521 2541',
		  :email => 'info@mujonyc.com'}

		# Create address_to object
		address_to = {
		  :object_purpose => 'PURCHASE',
		  :name => params['shipping_name'],
		  :street1 => params['shipping_address_1'],
		  :street2 => params['shipping_address_2'],
		  :city => params['shipping_city'],
		  :state => params['shipping_state'],
		  :zip => params['shipping_zip_code'],
		  :country => 'US',
		  :phone => params['shipping_telephone'],
		  :email => params['shipping_email']
		}

		if address_to[:name] == "" || address_to[:street1] == "" || address_to[:city] == "" || address_to[:state] == "" || address_to[:zip] == "" || address_to[:country] == "" || address_to[:email] == ""
			session[:shipment_error] = "Please fill in required blank fields"
			# redirect_to :back
			render json: {error: session[:shipment_error]}
		elsif !ValidateEmail.valid?(address_to[:email])
			session[:shipment_error] = "Please enter valid email address"
			# redirect_to :back
			render json: {error: session[:shipment_error]}
		elsif address_to[:state].length != 2
			session[:shipment_error] = "Please enter 2 letter abbreviation of state"
			# redirect_to :back
			render json: {error: session[:shipment_error]}
		else
			validation = Shippo::Address.create(address_to).validate()
			if validation['object_state'] === 'INVALID'
				session[:shipment_error] = validation['messages'].first[:text]
				# redirect_to :back
				render json: {error: session[:shipment_error]}
			else
				session[:address_from] = address_from
				session[:address_to] = address_to
				redirect_to checkout_index_path
			end
		end
	end

end