class Api::V1::ParksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    if params[:tag_id]
      tag = Tag.find(params[:tag_id])
      render json: {
        "parks" => tag.parks,
        "tag" => tag
      }
    else
      render json: {
        "parks" => Park.all
      }
    end
  end

  def show
    park = Park.find(params[:id])
<<<<<<< HEAD
    reviews = ActiveModelSerializers::SerializableResource.new(
      park.reviews,
      each_serializer: ReviewSerializer
    )
    render json: {
      park: park,
      reviews: reviews
    }
=======
    reviews = park.reviews
    render json: { park: park, reviews: reviews }
>>>>>>> 7bf93292761087db90b4eb1c797825ea4084a4e7
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
