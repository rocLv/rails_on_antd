class AddAuthenticityTokenToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :authenticity_token, :string, limit: 30
    add_index :users, :authenticity_token, unique: true
  end
end
