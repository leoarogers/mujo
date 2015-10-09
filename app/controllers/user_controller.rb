class UserController < ApplicationController

	def create
		user = User.new
		user.email = params[:user][:email]
		if user.valid?
			user = User.find_by(email: params[:user][:email])
			if !user
				@user = User.create(email: params[:user][:email])
				session[:message] = "Thanks. We'll be in touch."
			else
				session[:message] = "We already have you on record."
			end
		else
			session[:message] = "Invalid email address."
		end
		redirect_to shop_index_path + '#bottom_half'
	end

end