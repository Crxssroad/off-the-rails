class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :reviews, :city, :state, :country

  has_many :reviews
end
