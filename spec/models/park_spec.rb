require 'rails_helper'

RSpec.describe Park, type: :model do
  it { should have_valid(:name).when("Walt Disney World") }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:description).when("This is the most wonderful time of the year.") }
  it { should_not have_valid(:description).when(nil, "") }
end
