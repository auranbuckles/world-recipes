class RecipesController < ApplicationController
	before_action :find_recipe, except: [:index, :create, :favorite]
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
    @recipe = Recipe.new(recipe_params)
    @recipe.author = current_user
    @recipe.save
  end

  def update
    @recipe = Recipe.find(params[:id])
    if @recipe.update(recipe_params)
      render json: { status: 'ok' }
    end
  end

  private

  def recipe_params
  	params.require(:recipe).permit(:id, :title, :upvotes, :difficulty, :time, :servings, :description, :ingredients, :directions, :category_id, :author_id)
  end

  def find_recipe
  	@recipe = Recipe.find(params[:id])
  end
end
