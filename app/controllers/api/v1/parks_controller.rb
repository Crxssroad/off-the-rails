class Api::V1::ParksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    is_admin = current_user && current_user.admin?
    if params[:tag_id]
      tag = Tag.find(params[:tag_id])
      render json: {
        "parks" => tag.parks,
        "tag" => tag,
        "admin" => is_admin
      }
    else
      render json: {
        "parks" => Park.all,
        "admin" => is_admin
      }
    end
  end

  def show
    park = Park.find(params[:id])

    render json: park
  end

  def create
    park = Park.new(park_params)

    if park.save
      tag_ids_array = params[:park][:tag_ids] ? params[:park][:tag_ids].split(",") : nil
      if tag_ids_array
        tag_ids_array.shift
        tag_ids_array.each do |id|
          park.tags << Tag.find(id.to_i)
        end
      end
      render json: park
    else
      render json: park.errors.full_messages
    end
  end

  private

  def park_params
    params.require(:park).permit(:name, :description, :city, :state, :country, :park_photo, :tag_ids)
  end
end
