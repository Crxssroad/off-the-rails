class AdminSeeder
  ADMINS = [
    "admin@offtherails.com",
    "boss@offtherails.com"
  ]

  def self.seed!
    ADMINS.each do |admin|
      admin_user = User.find_by(email: admin)
      unless admin_user.nil?
        admin_user.role = "admin"
        admin_user.save
      end
    end
  end

end
