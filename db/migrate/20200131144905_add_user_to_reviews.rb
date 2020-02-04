class AddUserToReviews < ActiveRecord::Migration[5.2]
  def change
    add_reference :reviews, :user, index:true, null: false, default: 1
  end
end
