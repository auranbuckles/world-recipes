function NoteService($http) {

  this.createNote = function(data) {
  	$http.post('http://localhost:3000/notes', data)
			  	.then(console.log("posting new note..."))
  }

}

angular
	.module('app')
	.service('NoteService', NoteService)