$(document).ready(function () {
  const hamburger = $(".checkbox");
  const mobileNav = $(".mobile-nav");
  const nextPageButtonCoffin = $("#next");
  const prevPageButtonCoffin = $("#prev");
  const nextPageButtonGravestone = $("#next-gravestone");
  const prevPageButtonGravestone = $("#prev-gravestone");
  const nextPageButtonWreath = $("#next-wreath");
  const prevPageButtonWreath = $("#prev-wreath");
  const mobileNavItems = $(".mobile-nav-items");
  const COFFIN_NUMBER = 16;
  const GRAVESTONE_NUMBER = 11;
  const WREATH_NUMBER = 14;

  /*
   * Locale related functions
   */

  /*
   * Mobile navigation related functions
   */

  hamburger.click(function () {
    mobileNav.toggleClass("open");
  });

  mobileNavItems.click(function () {
    hamburger.prop("checked", false);
    mobileNav.toggleClass("open");
  });

  /*
   * Slides related functions
   */

  function loadDiv(container, imageUrl, active, index) {
    // Create a new div element
    var newDiv = document.createElement("div");

    // Set style properties
    newDiv.style.backgroundImage = 'url("' + imageUrl + '")';
    newDiv.style.backgroundPosition = "center";
    newDiv.style.backgroundRepeat = "no-repeat";
    newDiv.style.backgroundSize = "cover";

    // Set data attributes
    newDiv.setAttribute("data-active", active);
    newDiv.setAttribute("data-index", index);

    // Append the new div to the container div
    document.getElementById(container).appendChild(newDiv);
  }

  // Function to load images from a folder
  function loadImagesFromFolder(
    folderPath,
    numberOfImages,
    containerId = null
  ) {
    const imageAnnotation = folderPath.split("/").slice(-1)[0];
    const divName = containerId ? containerId : imageAnnotation + "-slides";

    for (var i = 1; i <= numberOfImages; i++) {
      var imageUrl = `${folderPath}/${imageAnnotation}${i}.jpg`;
      loadDiv(divName, imageUrl, i == 1, i);
    }
  }

  function nextPage(slides, maxPage) {
    const slide = $(slides);
    const currentPage = slide.find("[data-active=true]");
    const currentIndex = currentPage.attr("data-index");
    let nextPage;
    if (currentIndex != maxPage) {
      nextPage = currentPage.next();
    } else {
      nextPage = slide.find("[data-index=1]");
    }

    nextPage.attr("data-active", "true");
    currentPage.attr("data-active", "false");
  }

  function prevPage(slides, counter) {
    const slide = $(slides);
    const currentPage = slide.find("[data-active=true]");
    const currentIndex = currentPage.attr("data-index");
    let prevPage;

    if (currentIndex != 1) {
      prevPage = currentPage.prev();
    } else {
      prevPage = slide.find(`[data-index=` + counter + "]");
    }

    prevPage.attr("data-active", "true");
    currentPage.attr("data-active", "false");
  }

  /*
   * Slides navigation for coffin
   */

  nextPageButtonCoffin.click(function () {
    nextPage("#coffin-slides", COFFIN_NUMBER);
  });
  prevPageButtonCoffin.click(function () {
    prevPage("#coffin-slides", COFFIN_NUMBER);
  });

  loadImagesFromFolder("../assets/images/coffin", COFFIN_NUMBER);

  /*
   * Slides navigation for gravestone
   */

  nextPageButtonGravestone.click(function () {
    nextPage("#gravestone-slides", GRAVESTONE_NUMBER);
  });
  prevPageButtonGravestone.click(function () {
    prevPage("#gravestone-slides", GRAVESTONE_NUMBER);
  });

  loadImagesFromFolder("../assets/images/gravestone", GRAVESTONE_NUMBER);

  /*
   * Slides navigation for wreath
   */

  nextPageButtonWreath.click(function () {
    nextPage("#wreath-slides", WREATH_NUMBER);
  });
  prevPageButtonWreath.click(function () {
    prevPage("#wreath-slides", WREATH_NUMBER);
  });

  loadImagesFromFolder("../assets/images/wreath", WREATH_NUMBER);
});
