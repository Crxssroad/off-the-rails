class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :reviews

  has_many :reviews
end
