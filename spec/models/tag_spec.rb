require 'rails_helper'

RSpec.describe Tag, type: :model do
  it { should have_valid(:name).when("Happy") }
  it { should_not have_valid(:name).when(nil, "") }
end
