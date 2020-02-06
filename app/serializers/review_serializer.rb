class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :rating, :user, :display_name, :vote_count, :vote_status

  belongs_to :user, serializer: UserSerializer
  belongs_to :park, serializer: ParkSerializer

  def display_name
    object.user.nickname != "" ? object.user.nickname : "#{object.user.first_name} #{object.user.last_name}"
  end

  def vote_status
    vote = nil
    if current_user
      vote = Vote.find_by(user_id: current_user.id, review: object.id)
    end
    vote
  end
end
