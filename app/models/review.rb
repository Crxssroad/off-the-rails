class Review < ApplicationRecord
  belongs_to :park
  belongs_to :user

  validates :title, presence: true
  validates :body, presence: true
  validates :rating, presence: true, numericality: {
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 5,
    only_integer: true
  }
end
