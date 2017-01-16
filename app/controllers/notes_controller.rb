class NotesController < ApplicationController

	def create
		@note = Note.new(note_params)
    if @note.save
    	render json: @note
    end
	end

	private

	def note_params
		params.require(:note).permit(:id, :content, :recipe_id)
	end

end