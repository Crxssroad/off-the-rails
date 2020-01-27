require 'rails_helper'

feature 'user views all theme parks' do
  before(:each) do
    @mouse_house = Park.create(name:"Magic Kingdom", description:"Happiest place on earth")
    @globe_house = Park.create(name:"Universal Studios", description:"Second happiest place on earth")
  end
  scenario 'user views the homepage' do
    visit '/'
    expect(page).to have_content('Welcome to the Park\'s index')

    expect(page).to have_content(@mouse_house.name)
    expect(page).to have_content(@globe_house.name)

    expect(page).to have_link(@mouse_house.name)
    expect(page).to have_link(@globe_house.name)

  end
end
