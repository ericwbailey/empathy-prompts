'use strict';


// Capture page hash name
var requestedPageId = getHash();


$.get('./content.json', function (response) {
  response = JSON.parse(response);
  // Generates the list of random prompts from JSON response
  var pages = _.shuffle(_.keys(response));

  // Checks to see if the hash already exists
  var requestedPageIndex = pages.indexOf(requestedPageId);

  window.addEventListener('hashchange', applyHash);
  window.addEventListener('load', applyHash);

  // If hash is specified and in list
  if (requestedPageId && requestedPageIndex >= 0) {
    // Move this hash to first array position
    pages = _.union(_.pullAt(pages, requestedPageIndex), pages);
  // Load specified hash and apply stuff
  } else if (requestedPageId !== 'about') {
    // Loads a random hash
    // console.log('oops no hashes')
    window.location.href = '#' + pages[0];
  }

  // Listens for "Show another" button press and generates a new hash
  $('#show-another').on('click', function (e) {
    var currentPageId = getHash();
    // Jump to next prompt in list
    var currentPageIndex = pages.indexOf(currentPageId);
    // If at end of list, jump to beginning
    window.location.href = '#' + _.get(pages, currentPageIndex + 1, pages[0]);
  });

  function applyHash () {
    var hash = getHash();

    _.each(pages, function (pageId) {
      $('#' + pageId).prop('hidden', true);
    });
    // Gets the current page hash, selects the current page prompt, then modifies its attributes
    $('title').html('Empathy Prompts: ' + _.get(response, hash + '.condition', ''));
    $('#' + hash).prop('hidden', false);
    $('body').attr('class', 't-' + hash);
    $('#title-' + hash).attr('tabindex', '0').get(0).focus();
    // window.scrollTo(0, 0);
  }
});


// Super basic sharing
$('#share').on('click', function (e) {
  window.prompt('Copy this URL and paste it into the sharing site of your choice:', window.location);
});


// Grabs the current page hash from the URL, then removes `#`
function getHash () {
  return window.location.hash.replace(/^\#/, '');
}


Konami(function disableDecoration () {
  $('[hidden]').removeProp('hidden');
  $('body').removeAttr('class');
  $('body').addClass('t-konami');
  $('#nav').remove();
});
