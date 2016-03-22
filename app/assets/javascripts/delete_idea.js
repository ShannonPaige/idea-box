function deleteIdeaButton() {
  $('.delete-btn').on("click", function(){
    var id = this.id.replace('delete-btn-', '');
    deleteIdea(id)
  })
}

function deleteIdea(id){
  $.ajax({
    url: '/api/v1/ideas/' + id,
    type: 'DELETE',
    success: function(response){
      console.log('deleteIdea SUCCESS', response)
      removeIdea(id)
    }, error: function(xhr){
      console.log('deleteIdea FAIL', xhr)
    }
  })
}
