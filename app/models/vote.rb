class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :review

  validates :value,
    numericality: {
      greater_than_or_equal_to: -1,
      less_than_or_equal_to: 1,
      only_integer: true
    }
end
