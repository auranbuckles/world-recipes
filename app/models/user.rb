class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :recipes, foreign_key: 'author_id'
  has_many :favorites
  has_many :favorite_recipes, through: :favorites, source: :recipe
end
