Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  resources :parks, only: [:new]

  get '/parks', to: 'static_pages#index'
<<<<<<< HEAD
=======
  get '/tags', to: 'static_pages#index'
  get '/tags/:tag_id/parks', to: 'static_pages#index'
  get '/parks/new', to: 'static_pages#index'
>>>>>>> 7bf93292761087db90b4eb1c797825ea4084a4e7
  get '/parks/:id', to: 'static_pages#index'

  namespace "api" do
    namespace "v1" do
      resources :parks, only: [:index, :show, :create, :new] do
        resources :reviews, only: [:index, :create]
      end
      resources :tags, only: [:index] do
        resources :parks, only: [:index]
      end
    end
  end
end
