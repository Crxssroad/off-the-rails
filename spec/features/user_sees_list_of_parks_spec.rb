require 'rails_helper'

feature 'user views all theme parks' do
  scenario 'user views the homepage' do
    visit '/'
    expect(page).to have_content('Welcome to the Park\'s index')
  end
end
