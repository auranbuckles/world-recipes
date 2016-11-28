class Recipe < ApplicationRecord
	belongs_to :category
	belongs_to :author, class_name: 'User'
	has_many :favorites
	has_many :favorited_users, through: :favorites, source: :user
	# serialize :ingredients, Array
	# serialize :directions, Array

	def ingredients=(str)
    write_attribute( :ingredients, str.split(/\r\n/) )
	end

	def directions=(str)
    write_attribute( :directions, str.split(/\r\n/) )
	end
end
