class NoteSerializer < ActiveModel::NoteSerializer
	attributes :id, :content

	belongs_to :recipe
end