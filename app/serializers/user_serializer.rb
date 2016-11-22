class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :recipes, foreign_key: 'author_id'
  # has_many :favorites
  has_many :favorite_recipes, through: :favorites, source: :recipe
end
