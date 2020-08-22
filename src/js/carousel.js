(function initInstagramCarousel() {
  // Select the carousel you'll need to manipulate and the buttons you'll add events to
  var carousel = document.querySelector("[data-target='carousel']");
  var card = carousel.querySelector("[data-target='card']");
  var leftButton = document.querySelector("[data-action='slideLeft']");
  var rightButton = document.querySelector("[data-action='slideRight']");

  // Prepare to limit the direction in which the carousel can slide,
  // and to control how much the carousel advances by each time.
  // In order to slide the carousel so that only three cards are perfectly visible each time,
  // you need to know the carousel width, and the margin placed on a given card in the carousel
  var carouselWidth = carousel.offsetWidth;
  var cardStyle = card.currentStyle || window.getComputedStyle(card);
  var cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

  // Count the number of total cards you have
  var cardCount = carousel.querySelectorAll("[data-target='card']").length;

  // Define an offset property to dynamically update by clicking the button controls
  // as well as a maxX property so the carousel knows when to stop at the upper limit
  var offset = 0;
  var maxX = -(
    (cardCount / 3) * carouselWidth +
    cardMarginRight * (cardCount / 3) -
    carouselWidth -
    cardMarginRight
  );

  // Add the click events
  leftButton.addEventListener("click", function () {
    if (offset !== 0) {
      offset += carouselWidth + cardMarginRight;
      carousel.style.transform = "translateX(" + offset + "px)";

      rightButton.classList.remove("inactive");
      leftButton.classList.remove("inactive");
      if (offset === 0 && !leftButton.classList.contains("inactive")) {
        leftButton.classList.add("inactive");
      }
    }
  });

  rightButton.addEventListener("click", function () {
    if (offset !== maxX) {
      offset -= carouselWidth + cardMarginRight;
      carousel.style.transform = "translateX(" + offset + "px)";

      rightButton.classList.remove("inactive");
      leftButton.classList.remove("inactive");
      if (offset === maxX && !rightButton.classList.contains("inactive")) {
        rightButton.classList.add("inactive");
      }
    }
  });

  setTimeout(function () {
    var carouselHeight = carousel.offsetHeight;
    carousel.parentElement.style.height = carouselHeight + "px";
    leftButton.style.top = (carouselHeight - 32) / 2 + "px";
    rightButton.style.top = (carouselHeight - 32) / 2 + "px";
  }, 500);
})();
