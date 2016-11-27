class Recipe < ApplicationRecord
	belongs_to :category
	belongs_to :author, class_name: 'User'
	has_many :favorites
	has_many :favorited_users, through: :favorites, source: :user

	# serialize :ingredients, Array
	# serialize :directions, Array
end
