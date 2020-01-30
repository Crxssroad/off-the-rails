class Park < ApplicationRecord
  has_many :reviews
  
  validates :name, presence: true
  validates :description, presence: true
end
