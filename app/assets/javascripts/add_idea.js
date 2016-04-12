function newIdeaButton() {
  $('#get-idea').on("click", function(event){
    event.preventDefault();
    var idea_params = { title: $("#title").val(), body: $('#body').val() };
    createNewIdea(idea_params);
  });
}

function createNewIdea(idea_params){
  $.ajax({
    url: '/api/v1/ideas',
    type: 'POST',
    data: idea_params,
    success: function(response){
      renderIdea(response);
      clearForm();
    }, error: function(xhr){
      console.log('getIdeaButton FAIL', xhr);
    }
  });
}

function clearForm() {
  $("#title").val('');
  $('#body').val('');
}
