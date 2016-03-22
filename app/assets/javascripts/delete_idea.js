function deleteIdeaButton() {
  $('.delete-btn').on("click", function(event){
    var id = this.id;
    deleteIdea(id)
  })
}

function deleteIdea(id){
  console.log(id)
  $.ajax({
    url: '/api/v1/ideas/' + id,
    type: 'DELETE',
    success: function(response){
      console.log('deleteIdea SUCCESS', response)
      removeIdea(id);
    }, error: function(xhr){
      console.log('deleteIdea FAIL', xhr)
    }
  })
}
