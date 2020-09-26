// SCROLL TO TOP
window.onscroll = function () {
  scrollFunction();
};

var scrollTopBtn = document.getElementById("scrollTop");
var headerContainer = document.getElementById("headerContainer");

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollTopBtn.classList.add("active");
    headerContainer.classList.add("scroll-active");
  } else {
    scrollTopBtn.classList.remove("active");
    headerContainer.classList.remove("scroll-active");
  }
}

scrollTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
