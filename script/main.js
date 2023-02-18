$(document).ready(function() {
    const hamburger = $(".checkbox");
    const mobileNav = $(".mobile-nav");
    const coffinFolder = "../assets/images/coffins/";
    const gravestoneFolder = "../assets/images/gravestones/";
    const wreathFolder = "../assets/images/wreaths/";
    const coffinSlides = $("#coffin-slides");
    const gravestoneSlides = $("#gravestone-slides");
    const wreathSlides = $("#wreath-slides");
    const nextPageButtonCoffin = $("#next");
    const prevPageButtonCoffin = $("#prev");
    const nextPageButtonGravestone = $("#next-gravestone");
    const prevPageButtonGravestone = $("#prev-gravestone");
    const nextPageButtonWreath = $("#next-wreath");
    const prevPageButtonWreath = $("#prev-wreath");
    const fileextension = ".jpg";
    const mobileNavItems = $(".mobile-nav-items");
    let coffinCounter = 1;
    let gravestoneCounter = 1;
    let wreathCounter = 1;

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    hamburger.click(function() {
        mobileNav.toggleClass("open");
    });

    mobileNavItems.click(function() {
        hamburger.prop('checked', false);
        mobileNav.toggleClass("open");
    });

    $.ajax({
        url: coffinFolder,
        success: function(data) {
            $(data).find("a:contains(" + fileextension + ")").each(function() {
                var filename = this.href.replace(window.location.host, "").replace("http://", "");
                if (coffinCounter == 1) {
                    coffinSlides.append(`<img 
                src="..${filename}" data-index=${coffinCounter++} data-active="true"/>`);
                } else {
                    coffinSlides.append(`<img 
                src="..${filename}" data-index="${coffinCounter++}"/>`);
                }

            });
        }
    });

    $.ajax({
        url: gravestoneFolder,
        success: function(data) {
            $(data).find("a:contains(" + fileextension + ")").each(function() {
                var filename = this.href.replace(window.location.host, "").replace("http://", "");
                if (gravestoneCounter == 1) {
                    gravestoneSlides.append(`<img 
                src="..${filename}" data-index=${gravestoneCounter++} data-active="true"/>`);
                } else {
                    gravestoneSlides.append(`<img 
                src="..${filename}" data-index="${gravestoneCounter++}"/>`);
                }

            });
        }
    });

    $.ajax({
        url: wreathFolder,
        success: function(data) {
            $(data).find("a:contains(" + fileextension + ")").each(function() {
                var filename = this.href.replace(window.location.host, "").replace("http://", "");
                if (wreathCounter == 1) {
                    wreathSlides.append(`<img 
                src="..${filename}" data-index=${wreathCounter++} data-active="true"/>`);
                } else {
                    wreathSlides.append(`<img 
                src="..${filename}" data-index="${wreathCounter++}"/>`);
                }

            });
        }
    });

    function nextPage(slides, counter) {
        const slide = $(slides);
        const currentPage = slide.find("[data-active=true]");
        const currentIndex = currentPage.attr("data-index");
        let nextPage;
        if (currentIndex != counter - 1) {
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
            prevPage = slide.find(`[data-index=` + (counter - 1) + "]");

        }

        prevPage.attr("data-active", "true");
        currentPage.attr("data-active", "false");

    }

    nextPageButtonCoffin.click(function() {
        nextPage("#coffin-slides", coffinCounter);
    });
    prevPageButtonCoffin.click(function() {
        prevPage("#coffin-slides", coffinCounter);
    });

    nextPageButtonGravestone.click(function() {
        nextPage("#gravestone-slides", gravestoneCounter);
    });
    prevPageButtonGravestone.click(function() {
        prevPage("#gravestone-slides", gravestoneCounter);
    });

    nextPageButtonWreath.click(function() {
        nextPage("#wreath-slides", wreathCounter);
    });
    prevPageButtonWreath.click(function() {
        prevPage("#wreath-slides", wreathCounter);
    });


});