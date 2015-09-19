require 'valid_email'

class User < ActiveRecord::Base
	validates :email, :presence => true, :email => true
end
