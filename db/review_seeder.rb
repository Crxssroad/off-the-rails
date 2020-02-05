class ReviewSeeder
  SHORT_REVIEW = %W(Quisque quis sollicitudin justo. Pellentesque id nisl rhoncus sapien vehicula faucibus ut et massa.).join(" ")
  MEDIUM_REVIEW = %W(Integer ac ullamcorper elit. Suspendisse eget mauris ultricies, posuere mauris ac, convallis nunc. Vestibulum non velit mauris. Nam lacinia ex in nulla ornare mollis. Proin non tellus magna. Etiam tristique, magna vitae ornare posuere, nunc nisl feugiat justo, eu dapibus massa elit eget dui. Fusce pellentesque magna eu vehicula aliquet. Aenean id ante tincidunt, pharetra velit sit amet, convallis nisl. Sed laoreet, neque scelerisque congue vestibulum, odio elit consectetur magna, quis molestie tortor libero sed orci.).join(" ")
  LONG_REVIEW = %W(Duis id dolor vel tellus tempus dignissim. Maecenas sollicitudin convallis ultricies. Sed velit erat, efficitur pharetra mi eu, suscipit commodo massa. Mauris vitae felis velit. Nulla facilisi. Sed iaculis mi ut ex vulputate, a posuere odio aliquam. Vivamus efficitur volutpat elit ut pretium. Donec convallis accumsan rhoncus. Mauris sed faucibus nisl, ullamcorper suscipit lacus.Praesent vehicula mattis sagittis. Aenean id ante tincidunt, pharetra velit sit amet, convallis nisl. Sed laoreet, neque scelerisque congue vestibulum, odio elit consectetur magna, quis molestie tortor libero sed orci. \n\nPellentesque in magna vel magna dignissim efficitur sed sit amet ipsum. In elit risus, rhoncus eget elementum eget, accumsan sed ipsum. Pellentesque laoreet tellus ultrices, facilisis sem et, consequat mauris. Vestibulum ut tincidunt dui. Ut aliquam sagittis sem ut ultricies. Praesent aliquet, ipsum id lacinia aliquet, ipsum velit consequat mauris, vulputate rutrum augue dolor at augue. \n\nNulla leo quam, pulvinar sit amet pharetra nec, viverra at orci. Etiam a nunc efficitur, congue neque in, accumsan quam. Mauris in imperdiet odio. Ut efficitur convallis efficitur. Vestibulum pulvinar sed metus ac gravida. Cras ultricies mattis dui ut pretium. Morbi fermentum venenatis dui vitae blandit. Donec vestibulum ipsum turpis. Aliquam elementum volutpat velit nec placerat. Vivamus eget turpis consequat, aliquam urna volutpat, ullamcorper tellus.).join(" ")

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
      }
    ]
  end

  def seed!
    @reviews.each do |review|
      new_review = Review.find_by(title: review[:title])
      if new_review.nil?
        new_review = Review.new(review)
        new_review.save
      end
    end
  end

end
