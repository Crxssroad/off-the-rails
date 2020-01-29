class Api::V1::ParksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Park.all
  end
end
