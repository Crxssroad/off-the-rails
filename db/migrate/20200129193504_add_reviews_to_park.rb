class AddReviewsToPark < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :park_id, :text, null: false
  end
end
