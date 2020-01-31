class Api::V1::TagsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Tag.all
  end
end
