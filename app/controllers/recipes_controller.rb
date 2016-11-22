class RecipesController < ApplicationController
	before_action :find_recipe, except: [:index, :create]
	before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

  def index
  	@recipes = Recipe.all
  	render json: @recipes
  end

  def show
  	@recipe = Recipe.find(params[:id])
  	render json: @recipe
  end

  def create
  	
  end

  def update
  	
  end

  def destroy
  	
  end

  private

  def recipe_params
  	params.require(:recipe).permit(:id, :title, :difficulty, :time, :servings, :ingredients, :directions, category_attributes: [:id, :name])
  end

  def find_recipe
  	@recipe = Recipe.find(params[:id])
  end
end
