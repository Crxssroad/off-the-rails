class UserSeeder
  USERS = [
    {
      email: "full@metal.com",
      first_name: "Edward",
      last_name: "Elric",
      nickname: "Fullmetal",
      password: ENV["USER_SEED_PWD1"],
      profile_photo: "../images/person.png"
    },
    {
      email: "bigarmor@metal.com",
      first_name: "Alphonse",
      last_name: "Elric",
      nickname: "Big Armor",
      password: ENV["USER_SEED_PWD2"],
      profile_photo: "../images/person.png"
    },
    {
      email: "boss@offtherails.com",
      first_name: "Boss",
      last_name: "Person",
      nickname: "BigBoss",
      password: ENV["USER_SEED_PWD3"],
      profile_photo: "../images/person.png",
    },
    {
      email: "noNickName@example.com",
      first_name: "Bob",
      last_name: "Bobson",
      nickname: "",
      password: ENV["USER_SEED_PWD4"],
      profile_photo: "../images/person.png"
    },
    {
      email: "admin@offtherails.com",
      first_name: "Norck",
      last_name: "Blalberts",
      nickname: "Nosepass",
      password: ENV["USER_SEED_PWD5"],
      profile_photo: "../images/person.png"
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
