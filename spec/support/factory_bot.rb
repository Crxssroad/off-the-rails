require 'factory_bot'

FactoryBot.define do
  factory :user do
    first_name { "John" }
    last_name { "Doe" }
    nickname { "Fluffball" }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

end
