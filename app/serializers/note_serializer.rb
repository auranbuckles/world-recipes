class NoteSerializer < ActiveModel::Serializer
	attributes :id, :content, :created_at

	belongs_to :recipe
end