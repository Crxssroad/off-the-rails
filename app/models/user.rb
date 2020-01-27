class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :role, presence: true, inclusion: { in: %w(member admin)}

  def admin?
    role == "admin"
  end


  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable
end
