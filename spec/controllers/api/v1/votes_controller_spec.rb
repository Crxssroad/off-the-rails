require 'rails_helper'

RSpec.describe Api::V1::VotesController do
  let!(:park) { Park.create(
    name: "OTR Park",
    description: "This park is off the rails!",
    city: "Boston",
    country: "USA"
    )}
  let!(:user1) { FactoryBot.create(:user) }
  let!(:user2) { FactoryBot.create(:user) }

  let!(:review) { Review.create(
      title: "I liked this place",
      body: "Lots of cool stuff to do, for real.",
      rating: 5,
      park: park,
      user: user1,
      vote_count: 5
    )}
  let!(:upvote) {
    {
      vote: {
        value: 1
      },
      park_id: park.id,
      review_id: review.id
    }
  }
  let!(:downvote) {
    {
      vote: {
        value: -1
      },
      park_id: park.id,
      review_id: review.id
    }
  }
  let!(:no_vote) {
    {
      vote: {
        value: 0
      },
      park_id: park.id,
      review_id: review.id
    }
  }

  let!(:bad_vote) {
    {
      vote: {
        value: 9000
      },
      park_id: park.id,
      review_id: review.id
    }
  }


  describe "POST#create" do
    context "Post of vote was succesful" do
      it "should persist in the database" do
        sign_in user1
        previous_count = Vote.count
        post :create, params: upvote, format: :json
        next_count = Vote.count
        expect(response.status).to eq(200)
        expect(response.content_type).to eq("application/json")

        expect(next_count).to be previous_count + 1
      end

      it "returns the vote that was just created and the new vote count of the review" do
        sign_in user1
        old_vote_count = review.vote_count
        post :create, params: upvote, format: :json
        returned_json = JSON.parse(response.body)

        expect(returned_json["vote"]["value"]).to eq upvote[:vote][:value]
        expect(returned_json["vote_count"]).to eq old_vote_count + upvote[:vote][:value]
      end
    end

    context "Post was unsuccesful" do
      it "doesn't save to the database" do
        sign_in user1
        previous_count = Vote.count
        post :create, params: bad_vote, format: :json
        next_count = Vote.count

        expect(next_count).to be previous_count
      end

      it "should return false" do
        sign_in user1
        previous_count = Vote.count
        post :create, params: bad_vote, format: :json
        next_count = Vote.count

        returned_json = JSON.parse(response.body)

        expect(returned_json).to be false
      end
    end
  end

  describe "PATCH#update" do
    context "Post of updated review was succesful" do
      it "should change in the database" do
        sign_in user1
        old_vote = { review: review, user: user1, value: 1 }
        vote = Vote.create(old_vote)
        put :update, params: { vote: { value: -1 }, park_id: park.id, review_id: review.id, id: vote.id }, format: :json
        new_vote = JSON.parse(response.body)["vote"]

        expect(new_vote["value"]).to eq(-1)
      end

      it "returns the vote that was updated and the review's new vote count" do
        sign_in user1
        old_vote_count = review.vote_count
        old_vote = { review: review, user: user1, value: 1 }
        vote = Vote.create(old_vote)
        put :update, params: { vote: { value: -1 }, park_id: park.id, review_id: review.id, id: vote.id }, format: :json
        returned_json = JSON.parse(response.body)
        new_vote_count = returned_json["vote_count"]

        expect(returned_json["vote"]["value"]).to eq(-1)
        expect(new_vote_count).to eq(old_vote_count - 2)
      end
    end
  end
end
