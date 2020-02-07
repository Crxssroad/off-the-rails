class TagSeeder
  TAGS = [
    { name: "water" },
    { name: "halloween" },
    { name: "coaster" },
    { name: "high adventure" },
    { name: "family friendly" },
    { name: "winter" },
    { name: "skate" },
    { name: "educational" },
    { name: "regional" },
    { name: "rodeo" },
    { name: "pay-as-you-go" },
    { name: "pay-one-price" }
  ]

  def self.seed!
    TAGS.each do |tag|
      new_tag = Tag.find_by(name: tag[:name])
      if new_tag.nil?
        new_tag = Tag.new(tag)
        new_tag.save
      end
    end
  end

end
