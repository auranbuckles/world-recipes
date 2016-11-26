class UsersController < ApplicationController
	# before_action :authenticate_user!

  def index
  	@users = User.all
  	render json: @users
  end

  def profile
  	@user = current_user
  	if @user
      @recipes = @user.recipes
      render json: @recipes, status: :ok
    else
      @recipes = Recipe.all
      render json: @recipes, status: :ok
    end
  end
end
