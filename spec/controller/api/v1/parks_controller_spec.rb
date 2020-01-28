require 'rails_helper'

RSpec.describe Api::V1::ParksController, type: :controller do
  describe "GET#index" do
    let!(:park1) { Park.create(
      name: "Disney",
      description: "Happiest place on Earth!"
    )}
    let!(:park2) { Park.create(
      name: "Six Flags",
      description: "Cool things happen!"
    )}

    it "should return all the parks on the index page" do
      get :index

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq(200)
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq(2)

      expect(returned_json[0]["name"]).to eq("Disney")
      expect(returned_json[0]["description"]).to eq("Happiest place on Earth!")

      expect(returned_json[1]["name"]).to eq("Six Flags")
      expect(returned_json[1]["description"]).to eq("Cool things happen!")
    end
  end
end
