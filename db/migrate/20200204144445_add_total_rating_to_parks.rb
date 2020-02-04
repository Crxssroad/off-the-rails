class AddTotalRatingToParks < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :total_rating, :integer, null: false, default: 0
  end
end
