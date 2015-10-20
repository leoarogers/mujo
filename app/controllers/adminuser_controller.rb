class AdminuserController < ApplicationController

	def index
		@users = User.all
		@user_count = @users.count
		@contacts = Contact.all
		@message_count = @contacts.count
	end

end