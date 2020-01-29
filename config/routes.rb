Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/parks/', to: 'homes#index'
  get '/parks/:id', to: 'homes#index'
  get '/parks/:id/reviews/new', to: 'homes#index'

  namespace "api" do
    namespace "v1" do
      resources :parks, only: [:index, :show, :create, :new] do
      resources :reviews, only: [:index, :new, :create]
      end
    end
  end
end
