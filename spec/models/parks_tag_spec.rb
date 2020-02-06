require 'rails_helper'

RSpec.describe ParksTag, type: :model do
  it { should belong_to :park }
  it { should belong_to :tag }
end
