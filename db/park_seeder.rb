class ParkSeeder
  IPSUM = %W(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ligula quis lectus auctor venenatis a sed est. Phasellus ac ultricies nisi, lacinia ornare lorem. Mauris justo risus, euismod et felis at, viverra lobortis velit. In ante dui, aliquet porttitor augue et, dignissim luctus lectus. Integer eget dignissim est. Ut fringilla accumsan facilisis. Nullam rutrum magna fermentum, placerat sapien sollicitudin, consectetur mauris. Phasellus ornare, arcu quis molestie dictum, eros magna egestas purus, ut tempus erat risus sit amet purus. Etiam fringilla pharetra ex, sit amet efficitur diam elementum ac. Cras magna leo, mattis vestibulum imperdiet vel, cursus nec leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas dapibus mi eget risus iaculis imperdiet. Nullam porttitor tristique mi, ut mattis neque vehicula sit amet. Aliquam enim orci, venenatis at augue eu, iaculis porttitor dolor. Proin quis dui non quam ornare rutrum. Integer suscipit lacinia urna, in varius leo interdum vitae. Vivamus ut dictum ante, at malesuada nunc. Suspendisse vulputate lacinia nisi in feugiat. Vivamus interdum velit sit amet nisl convallis, at dignissim arcu mattis. Aenean nec maximus nisl. Morbi in finibus quam, a vulputate metus.).join(" ")

  EPCOT = File.open(File.join(
    Rails.root, '/public/images_seed/epcot.jpg'
  ))
  DISNEY = File.open(File.join(
    Rails.root, '/public/images_seed/disney_land.jpg'
  ))
  SIX_FLAGS = File.open(File.join(
    Rails.root, '/public/images_seed/six_flags.jpg'
  ))
  SEAWORLD = File.open(File.join(
    Rails.root, '/public/images_seed/seaworld.jpg'
  ))
  UNIVERSAL_STUDIOS = File.open(File.join(
    Rails.root, '/public/images_seed/universal_studios.jpg'
  ))

  PARKS = [
    {
      name: "Epcot",
      description: IPSUM,
      city: "Boston",
      state: "MA",
      country: "USA",
      park_photo: EPCOT
    },
    {
      name: "Magic Kingdom",
      description: IPSUM,
      city: "Boston",
      state: "MA",
      country: "USA",
      park_photo: DISNEY
    },
    {
      name: "Universal Studios",
      description: IPSUM,
      city: "Boston",
      state: "MA",
      country: "USA",
      park_photo: UNIVERSAL_STUDIOS
    },
    {
      name: "Six Flags",
      description: IPSUM,
      city: "Boston",
      state: "MA",
      country: "USA",
      park_photo: SIX_FLAGS
    },
    {
      name: "Sea World",
      description: IPSUM,
      city: "Boston",
      state: "MA",
      country: "USA",
      park_photo: SEAWORLD
    }
  ]

  def self.seed!
    PARKS.each do |park|
      new_park = Park.find_by(name: park[:name])
      if new_park.nil?
        new_park = Park.new(park)
        new_park.save
      end
    end
  end

end
