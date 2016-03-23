function renderIdea(idea) {
  var truncatedBody = idea.body.substring(0,100);
  var htmlIdea =  '<div id=idea-' + idea.id + ' >' +
                  '<div class="editable">' +
                  '<h3>' +  idea.title + '</h3>' +
                  '<p>' + truncatedBody + '</p>' +
                  '</div>' +
                  '<p>' + idea.quality + '</p>' +
                  '<button class="delete-btn" id=delete-btn-' + idea.id + '>Delete Idea</button>' +
                  '<button class="edit-btn" id=edit-btn-' + idea.id + '>Edit Idea</button>' +
                  '</div>'
  $('#all-ideas').prepend(htmlIdea)
}


function renderIdeas(ideas) {
  var htmlIdeas = ideas.map(function(idea){
    renderIdea(idea)
  })
}

function removeIdea(id){
  $('#idea-' + id).remove();
}
