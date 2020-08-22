function openPage(event, pageName) {
  var i, tabcontent, tablinks;

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
    hideTab(tabcontent[i]);
  }

  showTab(document.getElementById(pageName));
}

function showTab(element) {
  element.style.display = "block";
  setTimeout(() => {
    element.style.opacity = 1;
  },0);
}

function hideTab(element) {
  element.style.display = "none";
  element.style.opacity = 0;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
