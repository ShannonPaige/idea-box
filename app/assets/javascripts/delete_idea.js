function deleteIdeaButton() {
  $('#all-ideas').on("click", ".delete-btn", function(){
    var id = this.id.replace('delete-btn-', '');
    deleteIdea(id);
  });
}

function deleteIdea(id){
  $.ajax({
    url: '/api/v1/ideas/' + id,
    type: 'DELETE',
    success: function(response){
      removeIdea(id);
    }, error: function(xhr){
      console.log('deleteIdea FAIL', xhr);
    }
  });
}
