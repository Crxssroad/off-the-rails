class CreateParkLocations < ActiveRecord::Migration[5.2]
  def change
      add_column :parks, :city, :string, null: false, default: 'city'
      add_column :parks, :state, :string
      add_column :parks, :country, :string, null: false, default: 'country'
    end
  end
