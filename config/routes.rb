Rails.application.routes.draw do
  get 'users/show'

	devise_for :users

	resources :users, only: [:show]

  resources :recipes, only: [:index, :show, :create, :update, :destroy]
  post 'recipes/:id/favorite', to: 'recipes#favorite'
end
