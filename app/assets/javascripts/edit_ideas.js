function editIdeaButton() {
  $('#all-ideas').on("click", ".edit-btn", function(){
    var id = this.id.replace('edit-btn-', '');
    makeEditable(id);
  })
}

function makeEditable(id){
  $('#idea-'+id+' .editable').addClass('editing')
  document.querySelectorAll('#idea-'+id+' .editable')[0].contentEditable = true;
  $('#idea-'+id+' .edit-btn').text('Save Changes').addClass('save-btn').removeClass('edit-btn')
}

function saveIdeaButton() {
  $('#all-ideas').on("click", ".save-btn", function(){
    var id = this.id.replace('save-btn-', '');
    var idea_params = { title: $('.editing h3').text(), body: $('.editing p').text() }
    updateIdea(idea_params);
  })
}

function updateIdea(id, idea_params){
  $.ajax({
    url: '/api/v1/ideas/' + id,
    type: 'PATCH',
    data: idea_params,
    success: function(response){
      console.log('updateIdea SUCCESS', response)
      saveIdea(id)
    }, error: function(xhr){
      console.log('updateIdea FAIL', xhr)
    }
  })
}

function saveIdea(){
  $('#idea-'+id+' .editable').removeClass('editing')
  document.querySelectorAll('#idea-'+id+' .editable')[0].contentEditable = false;
  $('#idea-'+id+' .edit-btn').text('Edit Idea').removeClass('save-btn').addClass('edit-btn')
}
