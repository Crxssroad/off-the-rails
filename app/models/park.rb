class Park < ApplicationRecord
  has_many :parks_tags 
  has_many :tags, through: :parks_tags

  validates :name, presence: true
  validates :description, presence: true
end
