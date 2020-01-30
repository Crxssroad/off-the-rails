class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  validates :first_name, presence: true
  validates :last_name, presence: true

  def admin?
    role == "admin"
  end
  
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable
end
