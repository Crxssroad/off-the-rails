class Api::V1::ParksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Park.all
  end

  def show
    render json: Park.find(params[:id])
  end
end
