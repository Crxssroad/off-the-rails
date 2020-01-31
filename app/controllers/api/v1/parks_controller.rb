class Api::V1::ParksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    if params[:tag_id]
      render json: Tag.find(params[:tag_id]).parks
    else
      render json: Park.all
    end
  end

  def show
    park = Park.find(params[:id])
    reviews = park.reviews
    render json: { park: park, reviews: reviews }
  end

  def create
    park = Park.new(park_params)

    if park.save
      render json: park
    else
      render json: park.errors.full_messages
    end
  end

  private

  def park_params
    params.require(:park).permit(:name, :description)
  end
end
