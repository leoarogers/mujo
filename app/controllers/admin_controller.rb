class AdminController < ApplicationController

	def index
		@contacts = Contact.all
		@addresses = Address.all
	end

end