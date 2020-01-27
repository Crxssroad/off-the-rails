Rails.application.routes.draw do
  root 'parks#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :parks, only: [:index, :show]
end
