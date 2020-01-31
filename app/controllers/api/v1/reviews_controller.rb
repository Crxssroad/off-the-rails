class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    reviews = Review.all
    render json: reviews
  end

  def create
    park = Park.find(params[:park_id])
    review = Review.new(review_params)
    review.park = park
    review.user = current_user

    if review.save
      render json: review
    else
      render json: review.errors.full_messages
    end
  end

  private
  def review_params
    params.require(:review).permit(:title, :body, :rating, :user)
  end
end
