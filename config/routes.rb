Rails.application.routes.draw do
  root 'application#index'

	devise_for :users

	resources :users, only: [:show]

	resources :categories, only: [:index, :show]

  resources :recipes, only: [:index, :show, :create, :update, :destroy]
  post 'recipes/:id/favorite', to: 'recipes#favorite'
end
