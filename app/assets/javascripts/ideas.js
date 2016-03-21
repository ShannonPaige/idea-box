// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  renderAllIdeas();
});


function renderAllIdeas() {
  $.ajax({
    url: '/api/v1/ideas',
    type: 'GET',
    success: function(response){
      console.log('SUCCESS', response)
      renderIdeas(response);
    }, error: function(xhr){
      console.log("F'ED UP", xhr)
    }
  })
}

function renderIdeas(ideas) {
  var htmlIdeas = ideas.map(function(idea){
    console.log(idea)
    var truncatedBody = idea.body.substring(0,100);
    return('<h3>' +  idea.title + '</h3>' +
          '<p>' + truncatedBody + '</p>' +
          '<p>' + idea.quality + '</p>')
  })
  $('#all-ideas').append(htmlIdeas)
}
