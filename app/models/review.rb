class Review < ApplicationRecord
  belongs_to :park

  validates :title, presence: true
  validates :body, presence: true
  validates :rating, presence: true
end
