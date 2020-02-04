class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :rating, :user, :display_name

  belongs_to :user, serializer: UserSerializer

  def display_name
    object.user.nickname != "" ? object.user.nickname : "#{object.user.first_name} #{object.user.last_name}"
  end
end
