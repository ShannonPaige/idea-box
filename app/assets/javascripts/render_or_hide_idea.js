function renderIdea(idea) {
  var truncatedBody = idea.body.substring(0,100);
  var htmlIdea =  '<div id ="' + idea.id + '" >' +
                  '<h3>' +  idea.title + '</h3>' +
                  '<p>' + truncatedBody + '</p>' +
                  '<p>' + idea.quality + '</p>' +
                  '<button class="delete-btn" id=' + idea.id + '>Delete Idea</button>' +
                  '</div>'
  $('#all-ideas').append(htmlIdea)
  deleteIdeaButton()
}


function renderIdeas(ideas) {
  var htmlIdeas = ideas.map(function(idea){
    renderIdea(idea)
  })
}

function deleteIdea(id){
  $('#' + id).remove();
}
