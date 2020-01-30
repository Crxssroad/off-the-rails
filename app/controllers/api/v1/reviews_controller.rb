class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Review.all
  end

  def create
    park = Park.find(params[:park_id])
    review = Review.new(review_params)
    review.park = park

    if review.save
      render json: review
    else
      render json: review.errors.full_messages
    end
  end

  private
  def review_params
    params.require(:review).permit(:title, :body, :rating)
  end
end
