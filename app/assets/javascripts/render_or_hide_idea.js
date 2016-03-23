function renderIdea(idea) {
  var truncatedBody = idea.body.substring(0,100);
  // var htmlIdea =  '<div id=idea-' + idea.id + ' >' +
  //                 '<div class="editable">' +
  //                 '<h3>' +  idea.title + '</h3>' +
  //                 '<p>' + truncatedBody + '</p>' +
  //                 '</div>' +
  //                 '<p>' + idea.quality + '</p>' +
  //                 '<div class="btn-group btn-group-xs" role="group">' +
  //                 '<button type="button" class="btn btn-danger delete-btn" id=delete-btn-' + idea.id + '>X</button>' +
  //                 '<button type="button" class="btn btn-danger edit-btn" id=edit-btn-' + idea.id + '>Edit Idea</button>' +
  //                 '</div>'+
  //                 '</div>'
  var htmlIdea = '<div class="row idea" id=idea-' + idea.id + ' >' +
                    '<div class="col-md-8">' +
                      '<div class="editable">' +
                        '<h3>' +  idea.title + '</h3>' +
                        '<p>' + truncatedBody + '</p>' +
                      '</div>' +
                      '<div class="btn-group btn-group-xs" role="group">' +
                        '<button type="button" class="btn btn-primary edit-btn" id=edit-btn-' + idea.id + '>Edit Idea</button>' +
                      '</div>'+
                    '</div>' +
                    '<div class="col-md-3">' +
                      '<p>' + idea.quality.toUpperCase() + '</p>' +
                    '</div>' +
                    '<div class="col-md-1">' +
                      '<div class="btn-group btn-group-xs" role="group">' +
                        '<button type="button" class="btn btn-danger delete-btn" id=delete-btn-' + idea.id + '>X</button>' +
                      '</div>'+
                    '</div>' +
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
