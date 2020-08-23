function openPage(event, pageName) {
  var i, tabcontent, tablinks;

  // On mobile devices close sidebar
  if (window.screen.width < 768) {
    toggleMenu();
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  // Moving the navbar bottom border
  document.getElementById("headerNavBorder").style.left =
    event.target.offsetLeft + 1 + "px";

  // Adding navlinks active class
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("is-active");
  }
  event.target.classList.add("is-active");

  // Display active Tabcontent
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    if (pageName !== tabcontent[i].id) hideElement(tabcontent[i], 100);
  }

  showElement(document.getElementById(pageName));
}

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

function toggleMenu() {
  var overlayElement = document.getElementById("masterOverlay");
  var headerToggleElement = document.getElementById("headerToggleBtn");

  document.getElementById("headerSidebar").classList.toggle("is-active");
  headerToggleElement.classList.toggle("is-active");
  if (!headerToggleElement.classList.contains("is-active")) {
    hideElement(overlayElement, 300);
  } else {
    showElement(overlayElement);
  }
}

// Get the element with id="defaultOpen" and click on it
showElement(document.getElementById("HomeTab"));
document.getElementById("masterOverlay").onclick = function () {
  if (
    document.getElementById("headerToggleBtn").classList.contains("is-active")
  ) {
    toggleMenu();
  }
};
