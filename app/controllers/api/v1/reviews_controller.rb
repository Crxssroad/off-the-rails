class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    park = Park.find(params[:park_id])
    reviews = park.reviews
    render json: reviews.order('created_at DESC')
  end

  def create
    park = Park.find(params[:park_id])
    if user_signed_in?
      review = Review.new(review_params)
      review.park = park
      review.user = current_user
      review.vote_count = 1
      if review.save
        create_destroy_park_rating("create", review)
        Vote.create(review: review, user: review.user, value: 1)
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
    past_rating = review.rating
    review.assign_attributes(review_params)

    if review.save
      new_rating = review.rating
      update_park_rating(past_rating, new_rating, review.park)
      render json: review
    else
      render json: review.errors.full_messages
    end
  end

  def destroy
    review = Review.find(params[:id])
    park = review.park
    create_destroy_park_rating("destroy", review)
    review.destroy
    render json: park
  end

  private
  def create_destroy_park_rating(action, review)
    review_rating = review.rating
    park = review.park

    if action == "create"
      park.total_rating += review_rating
    elsif action == "destroy"
      park.total_rating -= review_rating
    end
    park.save
  end

  def update_park_rating(past_rating, new_rating, park)
    rating_difference = (past_rating - new_rating).abs
    if past_rating < new_rating
      park.total_rating += rating_difference
    elsif past_rating > new_rating
      park.total_rating -= rating_difference
    end
    park.save
  end

  def review_params
    params.require(:review).permit(:title, :body, :rating, :user)
  end
end
