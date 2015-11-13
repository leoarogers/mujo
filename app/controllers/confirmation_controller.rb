class ConfirmationController < ApplicationController
	def index
		if session[:complete]
			session.clear
		else
			raise ActionController::RoutingError.new('Not Found')
		end
	end
end