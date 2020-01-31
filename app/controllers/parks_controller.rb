class ParksController < ApplicationController

  def new
    if !user_signed_in? || !current_user.admin?
      redirect_to '/'
    else
      render :new
    end
  end
end
