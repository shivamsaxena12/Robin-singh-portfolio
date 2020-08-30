// NOTE: showElement() and hideElement() is defined in common.js

function openProjectsPage(event, pageName) {
  var i, projectsTab, projectsTabLinks;

  // // On desktop devices scroll to top
  // if (window.screen.width > 768) {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }

  // Moving the navbar bottom border
  document.getElementById("projectsHeaderBorder").style.left =
    event.target.offsetLeft + 1 + "px";

  // Adding navlinks active class
  projectsTabLinks = document.getElementsByClassName("projects-tablink");
  for (i = 0; i < projectsTabLinks.length; i++) {
    projectsTabLinks[i].classList.remove("is-active");
  }
  event.target.classList.add("is-active");

  // Display active projects tab
  projectsTab = document.getElementsByClassName("projects-tab");
  for (i = 0; i < projectsTab.length; i++) {
    if (pageName !== projectsTab[i].id) hideElement(projectsTab[i], 100);
  }

  showElement(document.getElementById(pageName));
}

showElement(document.getElementById("uiuxTab"));
// showElement(document.getElementById("illustrationsTab"));
