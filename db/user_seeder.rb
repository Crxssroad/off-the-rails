class UserSeeder
  PROFILE_IMAGE1 = File.open(File.join(
    Rails.root, '/public/images_seed/kitten1.jpg'
  ))
  PROFILE_IMAGE2 = File.open(File.join(
    Rails.root, '/public/images_seed/kitten2.jpg'
  ))
  PROFILE_IMAGE3 = File.open(File.join(
    Rails.root, '/public/images_seed/puppy1.jpg'
  ))
  PROFILE_IMAGE4 = File.open(File.join(
    Rails.root, '/public/images_seed/puppy2.jpg'
  ))

  USERS = [
    {
      email: "full@metal.com",
      first_name: "Edward",
      last_name: "Elric",
      nickname: "Fullmetal",
      password: ENV["USER_SEED_PWD1"],
      profile_photo: PROFILE_IMAGE1
    },
    {
      email: "bigarmor@metal.com",
      first_name: "Alphonse",
      last_name: "Elric",
      nickname: "Big Armor",
      password: ENV["USER_SEED_PWD2"],
      profile_photo: PROFILE_IMAGE2
    },
    {
      email: "boss@offtherails.com",
      first_name: "Boss",
      last_name: "Person",
      nickname: "BigBoss",
      password: ENV["USER_SEED_PWD3"],
      profile_photo: PROFILE_IMAGE3,
    },
    {
      email: "noNickName@example.com",
      first_name: "Bob",
      last_name: "Bobson",
      nickname: "",
      password: ENV["USER_SEED_PWD4"],
      profile_photo: PROFILE_IMAGE4
    },
    {
      email: "admin@offtherails.com",
      first_name: "Norck",
      last_name: "Blalberts",
      nickname: "Nosepass",
      password: ENV["USER_SEED_PWD5"],
      profile_photo: PROFILE_IMAGE1
    }
  ]

  def self.seed!
    USERS.each do |user|
      new_user = User.find_by(email: user[:email])
      if new_user.nil?
        new_user = User.new(user)
        new_user.save
      end
    end
  end

end
