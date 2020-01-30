Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/parks', to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :parks, only: [:index, :create]
    end
  end

  resources :parks, only: [:new]
end
