class Review < ApplicationRecord
  belongs_to :park
  belongs_to :user
  has_many :votes

  validates :title, presence: true
  validates :body, presence: true, length:{ minimum: 20 }
  validates :rating, presence: true, numericality: {
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 5,
    only_integer: true
  }
end
