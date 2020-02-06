class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :votes
  
  validates :first_name, presence: true
  validates :last_name, presence: true

  mount_uploader :profile_photo, ProfilePhotoUploader
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable


  def admin?
    role == "admin"
  end
end
