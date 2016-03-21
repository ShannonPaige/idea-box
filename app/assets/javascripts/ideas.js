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
    return('<h2>' +  idea.title + '</h2>')
  })
  $('#all-ideas').append(htmlIdeas)
}
