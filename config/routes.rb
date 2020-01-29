Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/parks/', to: 'homes#index'
  get '/parks/:id', to: 'homes#index'
  get '/parks/:id/reviews/new', to: 'homes#index'

  namespace "api" do
    namespace "v1" do
      resources :parks, only: [:index, :show]
      resources :reviews, only: [:create]
    end
  end
end
