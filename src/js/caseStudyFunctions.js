// NOTE: showElement() and hideElement() is defined in common.js

// HEADER NAVBAR FUNCTION
function openCaseStudy(pageName) {
  var i, tabcontent;

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  hideElement(document.getElementById("homeWrapper"), 100);

  // Display active CaseStudy
  tabcontent = document.getElementsByClassName("case-study");
  for (i = 0; i < tabcontent.length; i++) {
    if (pageName !== tabcontent[i].id) hideElement(tabcontent[i], 100);
  }

  showElement(document.getElementById(pageName));
}

// For development only
// openCaseStudy('FirstCaseStudy');