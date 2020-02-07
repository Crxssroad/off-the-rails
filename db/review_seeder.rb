class ReviewSeeder
  SHORT_REVIEW = Faker::Hipster.sentences(number: (rand(1..2))).join(" ")
  MEDIUM_REVIEW = Faker::Hipster.sentences(number: (rand(4..5))).join(" ")
  LONG_REVIEW = Faker::Hipster.sentences(number: (rand(7..10))).join(" ")

  def initialize(users, parks)
    @reviews = [
      {
        title: "It was okay.",
        rating: 3,
        body: SHORT_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "It was great!",
        rating: 5,
        body: SHORT_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "It was awful!",
        rating: 1,
        body: SHORT_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "I got lost",
        rating: 2,
        body: MEDIUM_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "I lost my kid!",
        rating: 2,
        body: MEDIUM_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "Food was great!",
        rating: 4,
        body: MEDIUM_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "Food was okay!",
        rating: 3,
        body: LONG_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "Worst rollercoasters ever!!!",
        rating: 1,
        body: LONG_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "Okayest rollercoasters ever!!!",
        rating: 3,
        body: MEDIUM_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "Best cotton candy ever!!!",
        rating: 5,
        body: LONG_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "Worst cotton candy ever!!!",
        rating: 1,
        body: SHORT_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "The clown traumatized me!",
        rating: 1,
        body: LONG_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "I certainly was there",
        rating: 3,
        body: MEDIUM_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "I think I had fun",
        rating: 5,
        body: MEDIUM_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "Lifelong memory!",
        rating: 5,
        body: LONG_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "It was okay.",
        rating: 3,
        body: SHORT_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "It was great!",
        rating: 5,
        body: SHORT_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "It was awful!",
        rating: 1,
        body: SHORT_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "I got lost",
        rating: 2,
        body: MEDIUM_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "I lost my kid!",
        rating: 2,
        body: MEDIUM_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "Food was great!",
        rating: 4,
        body: MEDIUM_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "Food was okay!",
        rating: 3,
        body: LONG_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "Worst rollercoasters ever!!!",
        rating: 1,
        body: LONG_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "Okayest rollercoasters ever!!!",
        rating: 3,
        body: MEDIUM_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "Best cotton candy ever!!!",
        rating: 5,
        body: LONG_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "Worst cotton candy ever!!!",
        rating: 1,
        body: SHORT_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "The clown traumatized me!",
        rating: 1,
        body: LONG_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "I certainly was there",
        rating: 3,
        body: MEDIUM_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "I think I had fun",
        rating: 5,
        body: MEDIUM_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      },
      {
        title: "Lifelong memory!",
        rating: 5,
        body: LONG_REVIEW,
        user_id: users.sample.id,
        park_id: parks.sample.id
      }
    ]
  end

  def seed!
    @reviews.each do |review|
      new_review = Review.find_by(title: review[:title])
      if new_review.nil?
        new_review = Review.new(review)
        new_review.save
        associated_park = new_review.park
        associated_park.total_rating += new_review.rating
        associated_park.save
      end
    end
  end

end
