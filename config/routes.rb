Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/parks', to: 'static_pages#index'
  get '/tags', to: 'static_pages#index'
  get '/tags/:tag_id/parks', to: 'static_pages#index'
  get '/parks/new', to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :parks, only: [:index, :create]
      resources :tags, only: [:index] do
        resources :parks, only: [:index]
      end
    end
  end
end
