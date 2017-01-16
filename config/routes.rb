Rails.application.routes.draw do
  get 'favorites/create'

  root 'application#index'

	devise_for :users

	resources :users, only: [:index]

	get 'user/profile' => 'users#profile'
	get 'user/favorites' => 'users#favorites'

	resources :categories, only: [:index, :show]

  resources :recipes, only: [:index, :show, :create, :update, :destroy]

  resources :favorites, only: [:create]
  resources :notes, only: [:create]
end
