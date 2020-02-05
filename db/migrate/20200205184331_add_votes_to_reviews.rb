class AddVotesToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :vote_count, :integer, null: false, default: 0
  end
end
