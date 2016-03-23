function editIdeaButton() {
  $('#all-ideas').on("click", ".edit-btn", function(){
    var id = this.id.replace('edit-btn-', '');
    // make editable
    $('#idea-'+id+' .editable').addClass('editing')
    document.querySelectorAll('#idea-'+id+' .editable')[0].contentEditable = true;
    $('#idea-'+id+' .edit-btn').text('Save Changes').addClass('save-btn').removeClass('edit-btn')
    // editIdea(id)
  })
}

function editIdea(id){
  $.ajax({
    url: '/api/v1/ideas/' + id,
    type: 'DELETE',
    success: function(response){
      console.log('editIdea SUCCESS', response)
      removeIdea(id)
    }, error: function(xhr){
      console.log('editIdea FAIL', xhr)
    }
  })
}
