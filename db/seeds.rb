require_relative 'user_seeder'
require_relative 'admin_seeder'
require_relative 'tag_seeder'
require_relative 'park_seeder'
require_relative 'review_seeder'
require_relative 'assign_park_tags'

if Rails.env.development? || Rails.env.production?
  UserSeeder.seed!
  AdminSeeder.seed!
  TagSeeder.seed!
  ParkSeeder.seed!
  all_users = User.all
  all_parks = Park.all
  reviews = ReviewSeeder.new(all_users, all_parks)
  reviews.seed!
  assigner = AssignParkTags.new(all_parks)
  assigner.seed!(5)
end
