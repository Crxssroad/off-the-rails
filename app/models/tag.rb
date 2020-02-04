class Tag < ApplicationRecord
  has_many :parks_tags
  has_many :parks, through: :parks_tags

  validates :name, presence: true
end
