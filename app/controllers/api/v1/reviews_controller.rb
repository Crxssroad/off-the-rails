class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    reviews = Review.all
    render json: reviews
  end

  def create
    park = Park.find(params[:park_id])
    if user_signed_in?
      review = Review.new(review_params)
      review.park = park
      review.user = current_user
      if review.save
        render json: review
      else
        render json: review.errors.full_messages
      end
    else
      render json: false
    end
  end

  def update
    review = Review.find(params[:id])
    review.assign_attributes(review_params)

    if review.save
      render json: review
    else
      render json: review.errors.full_messages
    end
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    render json: true
  end

  private
  def review_params
    params.require(:review).permit(:title, :body, :rating, :user)
  end
end
