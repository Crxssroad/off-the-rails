class Api::ParksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json:{ parks: Parks.all }
  end
end
