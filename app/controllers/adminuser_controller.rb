class AdminuserController < ApplicationController

	def index
		@users = User.all
		@contacts = Contact.all
	end

end