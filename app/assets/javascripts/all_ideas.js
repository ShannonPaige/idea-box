function getIdeas() {
  $.ajax({
    url: '/api/v1/ideas',
    type: 'GET',
    data: {sort_order: counter},
    success: function(response){
      renderIdeas(response);
    }, error: function(xhr){
      console.log("renderAllIdeas FAIL", xhr);
    }
  });
}
