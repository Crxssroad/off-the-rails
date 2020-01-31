class ParksTag < ApplicationRecord
  belongs_to :park
  belongs_to :tag
end
