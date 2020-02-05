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
  ReviewSeeder.seed!
  AssignParkTags.seed!
end
