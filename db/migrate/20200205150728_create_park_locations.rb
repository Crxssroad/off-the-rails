class CreateParkLocations < ActiveRecord::Migration[5.2]
  def change
      add_column :parks, :city, :string, null: false
      add_column :parks, :state, :string
      add_column :parks, :country, :string, null: false
    end
  end
