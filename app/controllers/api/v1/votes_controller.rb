class Api::V1::VotesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    review = Review.find(params[:review_id])
    initial_count = review.vote_count
    vote = Vote.new(vote_params)
    vote.user = current_user
    vote.review = review
    if vote.save
      review.vote_count+= vote.value
      review.save
      vote_count = initial_count + vote.value
      render json: { vote: vote, vote_count: vote_count }
    else
      render json: false
    end
  end

  def update
    review = Review.find(params[:review_id])
    vote = Vote.find(params[:id])
    past_vote = vote.value
    vote.assign_attributes(vote_params)

    if vote.save
      new_vote = vote.value
      vote_count = update_review_vote_count(past_vote, new_vote, review)
      render json: { vote: vote, vote_count: vote_count }
    else
      render json: false
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:value)
  end

  def update_review_vote_count(past_vote, new_vote, review)
    vote_difference = (past_vote - new_vote).abs
    if past_vote < new_vote
      review.vote_count += vote_difference
    elsif past_vote > new_vote
      review.vote_count -= vote_difference
    end
    review.save
    review.vote_count
  end
end
