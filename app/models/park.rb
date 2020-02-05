class Park < ApplicationRecord
  has_many :reviews
  has_many :parks_tags
  has_many :tags, through: :parks_tags

  validates :name, presence: true, length: { maximum: 60 }
  validates :description, presence: true
  validates :city, presence: true
  validates :country, presence: true
end
