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
