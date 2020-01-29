class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def get_current_user
    if current_user
      render json: User.find(current_user.id)
    else
      render json: {
        "role" => "signed out"
      }
    end
  end
end
