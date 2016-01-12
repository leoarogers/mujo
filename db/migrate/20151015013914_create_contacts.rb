class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
    	t.string :email, null: false
    	t.string :name
    	
    	t.timestamps
    end
  end
end
