'use strict';

var requestedPageId = getHash();
// when we load



$.get('./content.json').then(function (response) {
  //generate the list of random cards
  var pages = _.shuffle(_.keys(response));

  //check for an existing hash?
  var requestedPageIndex = pages.indexOf(requestedPageId);

  window.addEventListener('hashchange', applyHash);
  window.addEventListener('load', applyHash);

  // if hash is specified and in list
  if (requestedPageId && requestedPageIndex >= 0) {
    // move this hash to first array position
    pages = _.union(_.pullAt(pages, requestedPageIndex), pages);
    //load specified hash and apply stuff
  } else if (requestedPageId !== 'about') {
    //load random hash
    console.log('oops no hashes')
    window.location.href = '#' + pages[0];
  }

  // eventListener
  $('#show-me-another').on('click', function (e) {
    var currentPageId = getHash();
    // jump to next card in list
    var currentPageIndex = pages.indexOf(currentPageId);
    // if at end of list, jump to beginning
    window.location.href = '#' + _.get(pages, currentPageIndex + 1, pages[0]);
  });

  function applyHash () {
    var hash = getHash();

    _.each(pages, function (pageId) {
      $('#' + pageId).attr('data-prompt', '');
    });
    //get the current page hash
    //select the current page card
    // modify the attributes
    $('#' + hash).attr('data-prompt', 'is-visible');
    $('body').removeClass().addClass('t-' + hash);
    $('#title-' + hash).attr('tabindex', '0');
    $('#title-' + hash).focus();
    //$('title').text('Empathy Prompts: ' + hash); TOOD: use condition in content.json
  }
});

$('#share').on('click', function (e) {
  window.prompt('Share this URL', window.location);
});

function getHash () {
  return window.location.hash.replace(/^\#/, '');
}
