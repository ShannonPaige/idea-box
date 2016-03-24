function upvoteIdeaButton() {
  $('#all-ideas').on("click", ".upvote-btn", function(){
    console.log('upvote idea button clicked')
    var id = this.id.replace('vote-btn-', '');
    var current_quality = this.closest('.quality').getElementsByTagName('p')[0].innerHTML.toLowerCase()
    var new_quality = upvote(current_quality);
    var idea_params = { quality: new_quality }
    voteIdea(id, idea_params);
  })
}

function upvote(current_quality){
  if (current_quality === 'swill'){
    return 'plausible'
  } else {
    return 'genius'
  }
}

function voteIdea(id, idea_params){
  $.ajax({
    url: '/api/v1/ideas/' + id,
    type: 'PATCH',
    data: idea_params,
    success: function(response){
      console.log('upvoteIdea SUCCESS', response)
      renderVote(id, idea_params)
    }, error: function(xhr){
      console.log('upvoteIdea FAIL', xhr)
    }
  })
}

function renderVote(id, idea_params){
  var quality = idea_params["quality"].toUpperCase()
  $('#idea-'+id+' .quality p').text(quality)
}
