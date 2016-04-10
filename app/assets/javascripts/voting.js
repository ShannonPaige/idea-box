function upvoteIdeaButton() {
  $('#all-ideas').on("click", ".upvote-btn", function(){
    var current_object = this;
    var new_quality = upvote(currentQuality(current_object));
    voteButton(current_object, new_quality);
  });
}

function downvoteIdeaButton() {
  $('#all-ideas').on("click", ".downvote-btn", function(){
    var current_object = this;
    var new_quality = downvote(currentQuality(current_object));
    voteButton(current_object, new_quality);
  });
}

function currentQuality(current_object){
  return current_object.closest('.quality').getElementsByTagName('p')[0].innerHTML.toLowerCase();
}

function voteButton(current_object, new_quality){
  var id = current_object.id.replace('vote-btn-', '');
  var idea_params = { quality: new_quality };
  voteIdea(id, idea_params);
}

function upvote(current_quality){
  if (current_quality === 'swill'){
    return 'plausible';
  } else {
    return 'genius';
  }
}

function downvote(current_quality){
  if (current_quality === 'genius'){
    return 'plausible';
  } else {
    return 'swill';
  }
}

function voteIdea(id, idea_params){
  $.ajax({
    url: '/api/v1/ideas/' + id,
    type: 'PATCH',
    data: idea_params,
    success: function(response){
      renderVote(id, idea_params);
    }, error: function(xhr){
      console.log('upvoteIdea FAIL', xhr);
    }
  });
}

function renderVote(id, idea_params){
  var quality = idea_params["quality"].toUpperCase();
  $('#idea-'+id+' .quality p').text(quality);
}
