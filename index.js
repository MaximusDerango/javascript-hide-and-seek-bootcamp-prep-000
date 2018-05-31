var getFirstSelector = function(selector) {
  return document.querySelector(selector);
};

var nestedTarget = function() {
  return document.querySelector("#nested .target");
};

var increaseRankBy = function(n) {
  const ranked_elems = 
    document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranked_elems.length; i++) {
    var num = parseInt(ranked_elems[i].innerHTML);
    ranked_elems[i].innerHTML = num + n;
  }
};

var deepestChild = function() {
  var current = document.querySelector("#grand-node");
  
  while (current.children.length > 0) {
    current = current.children[0];
  }
  return current;
};