class Note < ApplicationRecord
	belongs_to :recipe

	validates :content, presence: true, length: { in: 1..500 }
end
