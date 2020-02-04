class UserSerializer < ActiveModel::Serializer
  attributes :id,
    :first_name,
    :last_name,
    :email,
    :profile_photo,
    :nickname,
    :display_name
    
    def display_name
      object.nickname != "" ? object.nickname : "#{object.first_name} #{object.last_name}"
    end
end
