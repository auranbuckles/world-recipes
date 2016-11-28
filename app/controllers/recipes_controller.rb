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
    binding.pry
    @recipe = Recipe.new(recipe_params)
    @recipe.author = current_user
    @recipe.save
    # if @recipe.save
    #   respond_to do |format|
    #     format.json { render json: @recipe, status: :ok }
    #   end
    # end
  end

  def update
  	
  end

  def destroy
  	
  end

  private

  def recipe_params
  	params.require(:recipe).permit(:id, :title, :difficulty, :time, :servings, :description, :ingredients, :directions, :category_id, :author_id)
  end

  def find_recipe
  	@recipe = Recipe.find(params[:id])
  end
end
