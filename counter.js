var counter = 0;
var display_str = "";
var display_div = document.getElementById("display_div_id");

function incrementCount(current_count){
  setTimeout(function(){
    // clear count
    while (display_div.hasChildNodes()) {
      display_div.removeChild(display_div.lastChild);
    }
    counter += current_count;
    display_str = counter.toString();
    for (var i = 0; i < 12 - display_str.length; i++) {
      var new_span = document.createElement('span');
      new_span.className = 'num_tiles';
      new_span.innerText = '0';
      display_div.appendChild(new_span);
    }
    for (var i = 0; i < display_str.length; i++) {
      var new_span = document.createElement('span');
      new_span.className = 'num_tiles';
      new_span.innerText = display_str[i];
      display_div.appendChild(new_span);
    }
  }, 0);
}
