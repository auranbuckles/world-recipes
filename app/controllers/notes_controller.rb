class NotesController < ApplicationController

	def create
		@note = Note.new(note_params)
    @note.save
	end

	private

	def note_params
		params.require(:note).permit(:id, :content, :recipe_id)
	end

end