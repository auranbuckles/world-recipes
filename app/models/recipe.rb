class Recipe < ApplicationRecord
	belongs_to :category
	belongs_to :author, class_name: 'User', foreign_key: 'author_id'
	has_many :favorites
	has_many :favorited_users, through: :favorites, inverse_of: :user
end
