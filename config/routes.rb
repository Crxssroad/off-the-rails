Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/parks/:id/reviews/new', to: 'homes#index'

  namespace "api" do
    namespace "v1" do
      resources :reviews, only: [:create]
    end
  end
end
