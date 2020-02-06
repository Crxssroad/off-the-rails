Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  resources :parks, only: [:new]

  get '/parks', to: 'static_pages#index'
  get '/tags', to: 'static_pages#index'
  get '/tags/:tag_id/parks', to: 'static_pages#index'
  get '/parks/:id', to: 'static_pages#index'

  namespace "api" do
    namespace "v1" do
      resources :parks, only: [:index, :show, :create, :new] do
        resources :reviews, only: [:index, :create, :update, :destroy] do
          resources :votes, only: [:create, :update]
        end
      end
      resources :tags, only: [:index] do
        resources :parks, only: [:index]
      end
    end
  end
end
