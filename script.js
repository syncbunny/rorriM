let theEl = null;

document.addEventListener("contextmenu", function(e) {
  theEl = e.target;
});

chrome.runtime.onMessage.addListener(function(req, sender) {
  // console.log(theEl);
  if (req == "x-mirror") {
    var transform = window.getComputedStyle(theEl, null).getPropertyValue('transform');
    // console.log(transform);
    if (transform == 'none') {
      theEl.style.transform = 'scale(-1.0, 1.0)';
    } else {
      theEl.style.transform = transform + ' scale(-1.0, 1.0)';
    }
  }
  return true;
});

