require 'rails_helper'

RSpec.describe Api::V1::ParksController, type: :controller do
  describe "GET#index" do
    let!(:park1) { Park.create(
      name: "Disney",
      description: "Happiest place on Earth!"
    )}

    it "should return all the parks on the index page" do
      get :index

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq(200)
      expect(response.content_type).to eq("application/json")

      expect(returned_json[0]["name"]).to eq("Disney")
      expect(returned_json[0]["description"]).to eq("Happiest place on Earth!")
    end
  end

  describe "GET#show" do
    
  end
end
