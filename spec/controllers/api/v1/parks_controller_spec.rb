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

      expect(returned_json["parks"].length).to eq(2)

      expect(returned_json["parks"][0]["name"]).to eq("Disney")
      expect(returned_json["parks"][0]["description"]).to eq("Happiest place on Earth!")

      expect(returned_json["parks"][1]["name"]).to eq("Six Flags")
      expect(returned_json["parks"][1]["description"]).to eq("Cool things happen!")
    end
  end

  describe "GET#show" do
    let!(:park1) { Park.create(
      name: "Disney",
      description: "Happiest place on Earth!"
    )}

    it "should return a single park on the show page" do
      get :show, params: { id: park1.id }

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq(200)
      expect(response.content_type).to eq("application/json")

      expect(returned_json["park"]["name"]).to eq("Disney")
      expect(returned_json["park"]["description"]).to eq("Happiest place on Earth!")
    end
  end

  describe "POST#create" do
    context "Post of park was succesful" do
      let!(:park1) { { park: {
        name: "Splash Ablademy",
        description: "Lorn Splorsh. Mork Wet."
      } } }

      it "should persist in the database" do
        previous_count = Park.count
        post :create, params: park1, format: :json
        next_count = Park.count

        expect(response.status).to eq(200)
        expect(response.content_type).to eq("application/json")

        expect(next_count).to be previous_count + 1
      end

      it "returns the park that was just created" do
        post :create, params: park1, format: :json
        returned_json = JSON.parse(response.body)
        expect(returned_json["park"]["name"]).to eq "Splash Ablademy"
        expect(returned_json["park"]["description"]).to eq "Lorn Splorsh. Mork Wet."
      end
    end

    context "Post was unsuccesful" do
      let!(:bad_park1) { { park: { name: "Splash Ablademy" } } }
      let!(:bad_park2) { { park: { description: "Park with no name" } } }

      it "doesn't save to the database" do
        previous_count = Park.count
        post :create, params: bad_park1, format: :json
        next_count = Park.count
        expect(next_count).to be previous_count
      end

      it "should return errors" do
        post :create, params: bad_park1, format: :json
        returned_json = JSON.parse(response.body)
        expect(returned_json.include?("Description can't be blank")).to be true

        post :create, params: bad_park2, format: :json
        returned_json = JSON.parse(response.body)
        expect(returned_json.include?("Name can't be blank")).to be true
      end
    end
  end
end
