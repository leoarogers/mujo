class ContactController < ApplicationController

	def index
	end

	def create
		contact = Contact.find_or_create_by(email: params['message']['contact_email'])
		message = Message.create(contact_id: contact.id, content: params['message']['message_content'])
		session[:message] = "Thank you for your feedback. We'll be in touch."
		redirect_to contact_index_path
	end

end