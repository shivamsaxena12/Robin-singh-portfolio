// SCROLL TO TOP
window.onscroll = function () {
  scrollFunction();
};

var scrollTopBtn = document.getElementById("scrollTop");
function scrollFunction() {
  console.log('vvv')
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollTopBtn.classList.add("active");
  } else {
    scrollTopBtn.classList.remove("active");
  }
}

scrollTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
