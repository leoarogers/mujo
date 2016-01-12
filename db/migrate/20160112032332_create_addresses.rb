class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
    	t.string :name
    	t.string :street1
    	t.string :street2
    	t.string :city
    	t.string :state
    	t.string :zip
    	t.string :country
    	t.string :phone
    	t.string :email
    	
    	t.timestamps
    end
  end
end