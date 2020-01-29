class Api::V1::ParksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Park.all
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
