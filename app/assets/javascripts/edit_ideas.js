function editIdeaButton() {
  $('#all-ideas').on("click", ".edit-btn", function(){
    var id = this.id.replace('edit-btn-', '');
    makeEditable(id);
  });
}

function makeEditable(id){
  $('#idea-'+id+' .editable').addClass('editing');
  $('#idea-'+id+' .editable .truncatedBody').addClass('hide');
  $('#idea-'+id+' .editable .fullBody').removeClass('hide');
  document.querySelectorAll('#idea-'+id+' .editable')[0].contentEditable = true;
  $('#idea-'+id+' .edit-btn').text('Save Changes').addClass('save-btn').removeClass('edit-btn');
}

function saveIdeaButton() {
  $('#all-ideas').on("click", ".save-btn", function(){
    var id = this.id.replace('edit-btn-', '');
    var idea_params = { title: $('.editing h3').text(), body: $('.editing .fullBody').text() };
    updateIdea(id, idea_params);
  });
}

function updateIdea(id, idea_params){
  $.ajax({
    url: '/api/v1/ideas/' + id,
    type: 'PATCH',
    data: idea_params,
    success: function(response){
      saveIdea(id, idea_params);
    }, error: function(xhr){
      console.log('updateIdea FAIL', xhr);
    }
  });
}

function saveIdea(id, idea_params){
  var truncatedBody = truncateOnWord(idea_params['body']);
  $('#idea-'+id+' .editable').removeClass('editing');
  $('#idea-'+id+' .editable .truncatedBody').text(truncatedBody).removeClass('hide');
  $('#idea-'+id+' .editable .fullBody').addClass('hide');
  document.querySelectorAll('#idea-'+id+' .editable')[0].contentEditable = false;
  $('#idea-'+id+' .save-btn').text('Edit Idea').removeClass('save-btn').addClass('edit-btn');
}
