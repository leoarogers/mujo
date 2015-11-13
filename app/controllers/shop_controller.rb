class ShopController < ApplicationController

	def index
		counter = 0
		if session[:item]
			session[:item].each{|x| counter += x['amount'].to_i}
			@amount = counter
			@price = @amount * 50
		else
			@amount = 0
			@price = 50
		end
	end

end