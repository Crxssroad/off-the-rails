class AssignParkTags
  ALL_TAGS = Tag.all
  ALL_PARKS = Park.all

  def self.seed!
    20.times do
      ParksTag.create({
        tag_id: ALL_TAGS.sample.id,
        park_id: ALL_PARKS.sample.id
      })
    end
  end

end
