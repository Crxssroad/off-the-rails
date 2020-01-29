require 'rails_helper'

RSpec.describe Api::V1::ReviewsController do

  describe "POST#create" do
    context "Post of review was succesful" do
      let!(:review1) { { review: { title: "This is awesome", body: "Because I said so.", rating: 5 } } }

      it "should persist in the database" do
        previous_count = Review.count
        post :create, params: review1, format: :json
        next_count = Review.count

        expect(response.status).to eq(200)
        expect(response.content_type).to eq("application/json")


        expect(next_count).to be previous_count + 1
      end

      it "returns the review that was just created" do
        post :create, params: review1, format: :json
        returned_json = JSON.parse(response.body)

        expect(returned_json["title"]).to eq "This is awesome"
        expect(returned_json["body"]).to eq "Because I said so."
        expect(returned_json["rating"]).to eq 5
      end
    end

    context "Post was unsuccesful" do
      let!(:bad_review) { {review: { title: "This is awesome" }} }

      it "doesn't save to the database" do
        previous_count = Review.count
        post :create, params: bad_review, format: :json
        next_count = Review.count

        expect(next_count).to be previous_count
      end

      it "should return errors" do
        post :create, params: bad_review, format: :json
        returned_json = JSON.parse(response.body)

        expect(returned_json.include?("Body can't be blank")).to be true
        expect(returned_json.include?("Rating can't be blank")).to be true
      end
    end
  end
end
