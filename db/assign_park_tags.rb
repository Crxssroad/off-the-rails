class AssignParkTags
  def initialize(parks)
    @parks = parks
  end

  def seed!(max)
    all_tags = Tag.all
    @parks.each do |park|
      used_ids = park.tags.map {|tag| tag.id}
      available_ids = all_tags.map {|tag| tag.id} - used_ids
      if park.tags.count < max
        ParksTag.create({
          park_id: park.id,
          tag_id: available_ids.sample
        })
      end
    end
  end

end
