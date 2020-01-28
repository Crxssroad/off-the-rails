class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  
  def create
    review = Review.new(review_params)

    if review.save
      render json: review
    else
      render json: review.errors.full_messages
    end
  end

  private
  def review_params
    params.require(:body).require(:review).permit(:title, :body, :rating)
  end
end
