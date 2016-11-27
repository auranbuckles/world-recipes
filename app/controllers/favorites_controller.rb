class FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.user = current_user
    @favorite.save
  end

  private

  def favorite_params
    params.require(:favorite).permit(:id, :recipe_id, :user_id)
  end
end
