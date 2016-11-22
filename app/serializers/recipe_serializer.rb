class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :difficulty, :time, :servings, :ingredients, :directions

  belongs_to :category
  belongs_to :author, class_name: 'User'
  # has_many :favorites
	has_many :favorited_users, through: :favorites, source: :user
end
