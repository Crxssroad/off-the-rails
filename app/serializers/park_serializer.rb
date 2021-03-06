class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :reviews, :average_rating, :currentUser, :city, :state, :country, :tags, :park_photo

  has_many :reviews, each_serializer: ReviewSerializer
  has_many :tags, each_serializer: TagSerializer
  has_many :reviews

  def reviews
    object.reviews.order('created_at DESC')
  end

  def average_rating
    object.total_rating / (object.reviews.length > 0 ? object.reviews.length : 1)
  end

  def currentUser
    current_user
  end
end
