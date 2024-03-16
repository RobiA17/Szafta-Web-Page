$(document).ready(function () {
  console.log("flower shop");

  const bouquetSlider = document.getElementById("bouquet-slider");
  const wreathSlider = document.getElementById("wreath-slider");
  const hamburger = $(".checkbox");
  const mobileNav = $(".mobile-nav");
  const mobileNavItems = $(".mobile-nav-items");

  hamburger.click(function () {
    mobileNav.toggleClass("open");
  });

  mobileNavItems.click(function () {
    hamburger.prop("checked", false);
    mobileNav.toggleClass("open");
  });

  function loadImagesFromFolder(
    folderPath,
    numberOfImages,
    containerId = null
  ) {
    const imageAnnotation = folderPath.split("/").slice(-1)[0];
    const divName = containerId ? containerId : imageAnnotation + "-slides";

    console.log(divName);
    for (var i = 1; i <= numberOfImages; i++) {
      var imageUrl = `${folderPath}/${imageAnnotation}_${i}.jpg`;
      loadDiv(divName, imageUrl, i == 1, i);
    }
  }

  function loadDiv(container, imageUrl, active, index) {
    // Create a new div element
    var newDiv = document.createElement("div");

    // Set style properties
    newDiv.style.backgroundImage = 'url("' + imageUrl + '")';
    newDiv.classList.add("image-holder");

    // Append the new div to the container div
    document.getElementById(container).appendChild(newDiv);
  }

  // Image slider related functions

  let mouseDown = false;
  let startX, scrollLeft;

  const startDraggingBouquet = (e) => {
    mouseDown = true;
    startX = e.pageX - bouquetSlider.offsetLeft;
    scrollLeft = bouquetSlider.scrollLeft;
  };

  const stopDragging = (e) => {
    mouseDown = false;
  };

  const moveBouquet = (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - bouquetSlider.offsetLeft;
    const scroll = x - startX;
    bouquetSlider.scrollLeft = scrollLeft - scroll;
  };

  const startDraggingWreath = (e) => {
    mouseDown = true;
    startX = e.pageX - wreathSlider.offsetLeft;
    scrollLeft = wreathSlider.scrollLeft;
  };

  const moveWreath = (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - wreathSlider.offsetLeft;
    const scroll = x - startX;
    wreathSlider.scrollLeft = scrollLeft - scroll;
  };

  // Add the event listeners
  bouquetSlider.addEventListener("mousemove", moveBouquet, false);
  bouquetSlider.addEventListener("mousedown", startDraggingBouquet, false);
  bouquetSlider.addEventListener("mouseup", stopDragging, false);
  bouquetSlider.addEventListener("mouseleave", stopDragging, false);

  wreathSlider.addEventListener("mousemove", moveWreath, false);
  wreathSlider.addEventListener("mousedown", startDraggingWreath, false);
  wreathSlider.addEventListener("mouseup", stopDragging, false);
  wreathSlider.addEventListener("mouseleave", stopDragging, false);

  loadImagesFromFolder(
    "../assets/images/flower-shop/bouquet",
    20,
    "bouquet-slider"
  );

  loadImagesFromFolder(
    "../assets/images/flower-shop/wreath",
    5,
    "wreath-slider"
  );
});
