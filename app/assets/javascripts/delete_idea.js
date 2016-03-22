function deleteIdeaButton() {
  $('.delete-btn').on("click", function(event){
    var id = this.id;
    deleteIdea(id)
  })
}

function deleteIdea(id){
  $.ajax({
    url: '/api/v1/ideas',
    type: 'DESTROY',
    data: id,
    success: function(response){
      console.log('deleteIdea SUCCESS', response)
      // renderIdea(response);
    }, error: function(xhr){
      console.log('deleteIdea FAIL', xhr)
    }
  })
}
