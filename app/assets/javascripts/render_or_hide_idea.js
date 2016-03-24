function renderIdea(idea) {
  // var truncatedBody = idea.body.substring(0,100);
  var truncatedBody = truncateOnWord(idea.body)
  var htmlIdea = '<div class="row idea" id=idea-' + idea.id + ' >' +
                    '<div class="col-md-8">' +
                      '<div class="editable">' +
                        '<h3>' +  idea.title + '</h3>' +
                        '<p class="truncatedBody">' + truncatedBody + '</p>' +
                        '<p class="fullBody hide">' + idea.body + '</p>' +
                      '</div>' +
                      '<div class="btn-group btn-group-xs" role="group">' +
                        '<button type="button" class="btn btn-primary edit-btn" id=edit-btn-' + idea.id + '>Edit Idea</button>' +
                      '</div>'+
                    '</div>' +
                    '<div class="col-md-3 quality">' +
                      '<h4>Quality</h4>' +
                      '<p>' + idea.quality.toUpperCase() + '</p>' +
                      '<div class="btn-group btn-group-xs" role="group">' +
                        '<button type="button" class="btn btn-success upvote-btn" id=vote-btn-' + idea.id + '><span class="glyphicon glyphicon-arrow-up" ></span></button>' +
                        '<button type="button" class="btn btn-warning downvote-btn" id=vote-btn-' + idea.id + '><span class="glyphicon glyphicon-arrow-down" ></span></button>' +
                      '</div>'+
                    '</div>' +
                    '<div class="col-md-1">' +
                      '<div class="btn-group btn-group-xs" role="group">' +
                        '<button type="button" class="btn btn-danger delete-btn" id=delete-btn-' + idea.id + '>X</button>' +
                      '</div>'+
                    '</div><br />' +
                  '</div>'
  $('#all-ideas').prepend(htmlIdea)
}

function renderIdeas(ideas) {
  document.getElementById('all-ideas').innerHTML = ""
  var htmlIdeas = ideas.map(function(idea){
    renderIdea(idea)
  })
}

function removeIdea(id){
  $('#idea-' + id).remove();
}

function truncateOnWord(str) {
        var trimmable = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF';
        var reg = new RegExp('(?=[' + trimmable + '])');
        var words = str.split(reg);
        var count = 0;
        return words.filter(function(word) {
            count += word.length;
            return count <= 100;
        }).join('');
    }
