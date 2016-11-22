class Recipe < ApplicationRecord
	belongs_to :category
	belongs_to :user
	has_many :favorites
	has_many :favorited_users, through: :favorites, source: :users
end
