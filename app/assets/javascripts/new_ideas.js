function newIdeaButton() {
  $('#get-idea').on("click", function(event){
    event.preventDefault();
    var idea_params = { title: $("#title").val(), body: $('#body').val() }
    createNewIdea(idea_params)
  })
}

function createNewIdea(){
  $.ajax({
    url: '/api/v1/ideas',
    type: 'POST',
    data: idea_params,
    success: function(response){
      console.log('getIdeaButton SUCCESS', response)
      renderIdea(response);
    }, error: function(xhr){
      console.log('getIdeaButton FAIL', xhr)
    }
  })
}

function renderIdea(idea) {
  var truncatedBody = idea.body.substring(0,100);
  var htmlIdea =  '<h3>' +  idea.title + '</h3>' +
                  '<p>' + truncatedBody + '</p>' +
                  '<p>' + idea.quality + '</p>'
  clearForm();
  $('#all-ideas').prepend(htmlIdea)
}

function clearForm() {
  $("#title").val('')
  $('#body').val('')
}
