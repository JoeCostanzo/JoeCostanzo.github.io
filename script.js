const content = [
  "Welcome to Joe's Site",
  "I have offered web design & development services since 2014. " +
  "Some of my experiences are listed below.\n" +
  "\n" +
    "<h5>Clients:</h5>" +
  "<ul>" +
    "<li><a href='http://www.superiorpowdercoatingllc.com'>Superior Powder Coating, LLC</a></li>" +
    "<li>MVP Innovations, Inc</li>" +
    "<li>TrivNow, LLC</li>" +
    "<li>Apex Systems, Inc (worked for AT&T)</li>" +
    "<li>Rentpath, LLC</li>" +
  "</ul>" +
  "<h5>Web app:</h5>" +
  "<ul>" +
    "<li><a href='http://third-fire-595.appspot.com/'>Palintip: Palindrome tip calculator</a></li>" +
  "</ul>" +
  "<h5>Stand-alone apps:</h5>" +
  "<ul>" +
    "<li><a href='https://play.google.com/store/apps/details?id=info.joeco.randomnumberutils&hl=pt'>Random Number Utilities</a></li>" +
    "<li><a href='https://joeco.itch.io/exosystem'>ExoSystem</a></li>" +
  "</ul>" +
  "<h5>Other prototypes:</h5>" +
  "<ul>" +
    "<li><a href='https://www.npmjs.com/package/reifycli'>Reify CLI - NPM Package</a></li>" +
    "<li><a href='https://www.npmjs.com/package/periodic-ping'>Periodic Ping - NPM Package</a></li>" +
    "<li>My AI - Machine learning app</li>" +
    "<li>Picture Sharing App</li>" +
  "</ul>",
  "You may contact me at: jcostanzo1@gmail.com"
];
$(document).ready(function () {

  // Catch pagination clicks
  $('#pagination').on('click', 'a.pagelink', function(e) {

    e.preventDefault();

    // Get the current data-page attribute
    var currPage = $('#pageLi').attr('data-page');
    var clickedLink = $(this).attr('data-linktype');

    // Change Content
    stepPage(currPage, clickedLink);
  });

  // Catch nav clicks
  $('#navigation').on('click', 'a.navlink', function(e) {

    e.preventDefault();

    // Get the page linked to
    var clickedLink = $(this).attr('data-linkto');

    // Change Content
    jumpPage(clickedLink);

  });

});

function adjustPageLinks(currPage) {
  $('.prevlink').removeClass('disabledlink');
  $('.nextlink').removeClass('disabledlink');
  $('.home').removeClass('selected');
  $('.about').removeClass('selected');
  $('.contact').removeClass('selected');
  if (currPage === 1) {
    $('.prevlink').addClass('disabledlink');
    $('.home').addClass('selected');
  } else if (currPage === 2) {
    $('.about').addClass('selected');
  } else if (currPage === 3) {
    $('.contact').addClass('selected');
    $('.nextlink').addClass('disabledlink');
  }
}

function stepPage(currPage, clickedLink) {

  // This would probably be an AJAX call in a real app.
  // We're just going to fake it here and do some DOM
  // Manipulation.

  // Make sure currPage is an int
  currPage = parseInt(currPage, 10);

  // If it was the Next link
  if (clickedLink === "next") {
    // highest we want to go is 3
    if (currPage < 3) {
      currPage++;
    }
  }
  // Otherwise if it was the Previous link
  else if (clickedLink === "prev") {
    // lowest we want to go is 1
    if (currPage > 1) {
      currPage--;
    }
  }
  // Otherwise something went wrong
  else {
    // Actual error checking would go here!
    return false;
  }
  changePage(currPage);
  adjustPageLinks(currPage);
}

function jumpPage(clickedLink) {
  var currPage;
  // If it was the Home link
  if (clickedLink === "home") {
    currPage = 1;
  }
  // Otherwise if it was the About link
  else if (clickedLink === "about") {
    // lowest we want to go is 1
    currPage = 2;
  }
  else {
    // lowest we want to go is 1
    currPage = 3;
  }
  changePage(currPage);
  adjustPageLinks(currPage);
}

function changePage(currPage) {
  // Update our DOM elements
  $('#contentDiv').html(content[currPage - 1]);
  $('#pageLi').html('-- Page ' + currPage + ' --');
  $('#pageLi').attr('data-page', currPage);

}
