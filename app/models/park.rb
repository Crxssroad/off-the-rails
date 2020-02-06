class Park < ApplicationRecord
  has_many :reviews
  has_many :parks_tags
  has_many :tags, through: :parks_tags

  mount_uploader :park_photo, ParkPhotoUploader
  validates :name, presence: true, length: { maximum: 60 }
  validates :description, presence: true
  validates :city, presence: true
  validates :country, presence: true
  validates :park_photo, presence: true
end
