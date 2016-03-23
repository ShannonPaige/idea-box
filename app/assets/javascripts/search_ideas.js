function searchIdeas(){
  $('#name_search_name').keyup('change', function () {
    var currentName = this.value.toUpperCase();
    debugger;
    $('.idea').each(function (index, idea) {
      $idea = $(idea);
      var title = this.children[0].children[0].children[0].innerHTML.toUpperCase()
      var body = this.children[0].children[0].children[1].innerHTML.toUpperCase()
      if (title.includes(currentName) || body.includes(currentName)) {
        $idea.show();
      } else {
        $idea.hide();
      }
    });
  });
}
