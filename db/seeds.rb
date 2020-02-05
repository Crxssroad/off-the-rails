users = [
  {
    email: "admin@offtherails.com",
    first_name: "Nick",
    last_name: "Alberts",
    nickname: "Nosepass",
    password: "banana",
    profile_photo: "../images/person.png",
    role: "admin"
  },
  {
    email: "full@metal.com",
    first_name: "Edward",
    last_name: "Elric",
    nickname: "Fullmetal",
    password: "banana",
    profile_photo: "../images/person.png"
  },
  {
    email: "bigarmor@metal.com",
    first_name: "Alphonse",
    last_name: "Elric",
    nickname: "Big Armor",
    password: "banana",
    profile_photo: "../images/person.png"
  },
  {
    email: "professionalParkGuy@offtherails.com",
    first_name: "Boss",
    last_name: "Person",
    nickname: "BigBoss",
    password: "banana",
    profile_photo: "../images/person.png",
    role: "admin"
  },
  {
    email: "noNickName@example.com",
    first_name: "Bob",
    last_name: "Bobson",
    nickname: "",
    password: "banana",
    profile_photo: "../images/person.png"
  }
]
users.each do |user|
  User.create(user)
end
tags = [
  { name: "water" },
  { name: "fire" },
  { name: "earth" },
  { name: "air" },
  { name: "halloween" },
  { name: "coaster" },
  { name: "high adventure" },
  { name: "family friendly" },
  { name: "winter" },
  { name: "skate" },
  { name: "dark" },
  { name: "educational" },
  { name: "regional" },
  { name: "rodeo" },
  { name: "pay-as-you-go" },
  { name: "pay-one-price" }
]
tags.each do |tag|
  Tag.create(tag)
end
parks = [
  { name: "Epcot", description: "Giant golf ball" },
  { name: "Magic Kingdom", description: "Happiest place on Earth" },
  { name: "Universal Studios", description: "Second happiest place on Earth" },
  { name: "Six Flags", description: "Many flags, big fun!" },
  { name: "Sea World", description: "Shamu! Splish splash!" }
]
parks.each do |park|
  Park.create(park)
end
all_users = User.all
all_parks = Park.all
all_tags = Tag.all
20.times do
  ParksTag.create({
    park_id: all_parks.sample.id,
    tag_id: all_tags.sample.id
  })
end
reviews = [
  {
    title: "It was okay.",
    rating: 3,
    body: "I lost my shoe on the rollercoaster.",
    user_id: all_users.sample.id,
    park_id: all_parks.sample.id
  },
  {
    title: "It was great!",
    rating: 5,
    body: "I won a teddy bear!",
    user_id: all_users.sample.id,
    park_id: all_parks.sample.id
  },
  {
    title: "It was awful!",
    rating: 1,
    body: "A shoe landed on my head!",
    user_id: all_users.sample.id,
    park_id: all_parks.sample.id
  },
  {
    title: "I got lost",
    rating: 2,
    body: "I'm still stuck in the park, please send help!",
    user_id: all_users.sample.id,
    park_id: all_parks.sample.id
  },
  {
    title: "I lost my kid!",
    rating: 2,
    body: "I got all the way home an realized I left my kid on the Teacup ride!",
    user_id: all_users.sample.id,
    park_id: all_parks.sample.id
  },
  {
    title: "Food was great!",
    rating: 4,
    body: "Mmm... The Hawaiian pizza was top notch!",
    user_id: all_users.sample.id,
    park_id: all_parks.sample.id
  },
  {
    title: "Food was okay!",
    rating: 3,
    body: "There wasn't any mustard for my hotdog! :(",
    user_id: all_users.sample.id,
    park_id: all_parks.sample.id
  },
  {
    title: "Best rollercoasters ever!!!",
    rating: 5,
    body: "My brain is melted!",
    user_id: all_users.sample.id,
    park_id: all_parks.sample.id
  }
]
reviews.each do |review|
  Review.create(review)
end
