class CartController < ApplicationController
	skip_before_filter  :verify_authenticity_token

	# adds items to cart (aka session[:item])
	def create
		item = {color: params['color'], size: params['size'], amount: params['amount']}
		if params['color'] == "" || params['size'] == "" || params['amount'] == ""
			render json: {error: "Please select a color, size, and quantity"}
		else
			if session[:item]
				match = false
				session[:item].each do |x|
					if x['color'] == params['color'] && x['size'] == params['size']
						x['amount'] = x['amount'].to_i + params['amount'].to_i
						match = true
					end
				end
				item = Hash[item.map{ |k, v| [k.to_s, v] }]
				session[:item].push(item) if !match
			else
				item = Hash[item.map{ |k, v| [k.to_s, v] }]
				session[:item] = [item]
			end
			# add up total and return in json
			puts "LOLOL"
			puts session[:item]
			counter = 0
			session[:item].each{|x| counter += x['amount'].to_i}
			render json: {error: "Item added to cart", amount: counter}
		end
		# redirect_to shop_index_path(anchor: 'middle_half')
	end

	def index
		if session[:item]
			counter = 0;
			session[:item].each{|x| counter += x['amount'].to_i}
			@price = counter * 50
			@items = session[:item]
			@total_items = counter
			redirect_to shop_index_path(anchor: 'middle_half') if @total_items == 0
		else
			raise ActionController::RoutingError.new('Not Found')
		end
	end

	# aka delete item from cart
	def show
		session[:item].delete_at(params['id'].to_i)
		redirect_to cart_index_path
	end
end