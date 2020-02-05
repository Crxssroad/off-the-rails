require 'rails_helper'

RSpec.describe Api::V1::ReviewsController do

  describe "POST#create" do
    context "Post of review was successful" do
      let!(:park1) { Park.create(
        name: "Disney",
        description: "Happiest place on Earth!",
        city: "Boston",
        country: "USA"
      )}
      let!(:user1) { FactoryBot.create(:user) }
      let!(:review1) {
        {
          review: {
            title: "This is awesome",
            body: "Because I said so and I am the very best there is.",
            rating: 5
          },
          park_id: park1.id
        }
      }

      it "should persist in the database" do
        sign_in user1
        previous_count = Review.count
        post :create, params: review1, format: :json
        next_count = Review.count

        expect(response.status).to eq(200)
        expect(response.content_type).to eq("application/json")
        expect(next_count).to be previous_count + 1
      end

      it "returns the review that was just created" do
        sign_in user1
        post :create, params: review1, format: :json
        returned_json = JSON.parse(response.body)

        expect(returned_json["review"]["title"]).to eq "This is awesome"
        expect(returned_json["review"]["body"]).to eq "Because I said so and I am the very best there is."
        expect(returned_json["review"]["rating"]).to eq 5
      end
    end

    context "Post was unsuccessful" do
      let!(:park2) { Park.create(
        name: "Universal",
        description: "Second happiest place on Earth!",
        city: "Boston",
        country: "USA"
      )}
      let!(:bad_review) {
        {
          review: {
            title: "This is awesome"
          },
          park_id: park2.id
        }
      }
      let!(:user1) { FactoryBot.create(:user) }

      it "doesn't save to the database" do
        sign_in user1
        previous_count = Review.count
        post :create, params: bad_review, format: :json
        next_count = Review.count

        expect(next_count).to be previous_count
      end

      it "should return errors" do
        sign_in user1
        post :create, params: bad_review, format: :json
        returned_json = JSON.parse(response.body)
        expect(returned_json.include?("Body can't be blank")).to be true
        expect(returned_json.include?("Rating can't be blank")).to be true
      end
    end
  end
end
