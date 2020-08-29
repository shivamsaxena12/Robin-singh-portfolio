function showElement(element) {
  element.style.display = "block";
  setTimeout(function () {
    element.style.opacity = 1;
  }, 0);
}

function hideElement(element, hideTimer) {
  element.style.opacity = 0;
  setTimeout(function () {
    element.style.display = "none";
  }, hideTimer);
}
