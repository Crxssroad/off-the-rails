require 'rails_helper'

RSpec.describe Api::V1::TagsController, type: :controller do
  describe "GET#index" do
    let!(:tag1) { Tag.create(
      name: "happy"
    )}
    let!(:tag2) { Tag.create(
      name: "sad"
    )}

    it "should return all the tags on the tags index page" do
      get :index

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq(200)
      expect(response.content_type).to eq("application/json")

      expect(returned_json["tags"].length).to eq(2)

      expect(returned_json["tags"][0]["name"]).to eq("happy")
      expect(returned_json["tags"][1]["name"]).to eq("sad")
    end
  end
end
