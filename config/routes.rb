Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/parks', to: 'static_pages#index'
  get '/parks/new', to: 'static_pages#index'
  get '/api/v1/users/get_current_user'

  namespace :api do
    namespace :v1 do
      resources :parks, only: [:index, :create]
    end
  end
end
