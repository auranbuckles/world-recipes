class RecipesController < ApplicationController
	before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
	
  def index
  	@recipes = Recipe.all
  	render json: @recipes
  end

  def show
  end

  def new
  end

  def create
  	
  end

  def edit
  end

  def update
  	
  end

  def destroy
  	
  end
end
