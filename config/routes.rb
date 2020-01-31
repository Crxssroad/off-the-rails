Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  resources :parks, only: [:new]

  get '/parks', to: 'static_pages#index'
  get '/parks/:id', to: 'static_pages#index'

  namespace "api" do
    namespace "v1" do
      resources :parks, only: [:index, :show, :create, :new] do
        resources :reviews, only: [:index, :create]
      end
    end
  end
end
