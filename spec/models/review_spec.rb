require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should belong_to :park }

  it { should have_valid(:title).when("Had a great time") }
  it { should have_valid(:body).when("Because Braden was there") }
  it { should have_valid(:rating).when(4) }

  it { should_not have_valid(:title).when(nil, "") }
  it { should_not have_valid(:body).when(nil, "") }
  it { should_not have_valid(:rating).when(-1, 5000, 3.14) }
end
