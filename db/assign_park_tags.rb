class AssignParkTags
  def initialize(parks)
    @parks = parks
  end

  def seed!(max)
    @parks.each do |park|
      if park.tags.count < max
        ParksTag.create({
          park_id: park.id,
          tag_id: Tag.find(park.tags.count + 1).id
        })
      end
    end
  end

end
