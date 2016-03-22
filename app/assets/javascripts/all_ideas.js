// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  getIdeas();
  newIdeaButton();
});


function getIdeas() {
  $.ajax({
    url: '/api/v1/ideas',
    type: 'GET',
    success: function(response){
      console.log('renderAllIdeas SUCCESS', response)
      renderIdeas(response);
    }, error: function(xhr){
      console.log("renderAllIdeas FAIL", xhr)
    }
  })
}
