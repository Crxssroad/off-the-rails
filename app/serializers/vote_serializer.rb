class VoteSerializer < ActiveModel::Serializer
  attributes :id, :value, :review

  belongs_to :review
end
