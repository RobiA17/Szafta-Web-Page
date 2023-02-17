$(document).ready(function() {
    const hamburger = $(".checkbox");
    const mobileNav = $(".mobile-nav");
    const coffins = $("#coffin-img-container");
    const coffinFolder = "../assets/images/coffins/";
    const slides = $("#coffin-slides");
    const nextPageButton = $("#next");
    const prevPageButton = $("#prev");
    const fileextension = ".jpg";
    const mobileNavItems = $(".mobile-nav-items");
    let coffinNumber;

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

    let counter = 1;
    $.ajax({
        url: coffinFolder,
        success: function(data) {
            $(data).find("a:contains(" + fileextension + ")").each(function() {
                var filename = this.href.replace(window.location.host, "").replace("http://", "");
                if (counter == 1) {
                    slides.append(`<img 
                src="..${filename}" data-index=${counter++} data-active="true"/>`);
                } else {
                    slides.append(`<img 
                src="..${filename}" data-index="${counter++}"/>`);
                }

            });
        }
    });

    function nextPage() {
        const currentPage = slides.find("[data-active=true]");
        const currentIndex = currentPage.attr("data-index");
        let nextPage;
        if (currentIndex != counter - 1) {
            nextPage = currentPage.next();

        } else {
            nextPage = slides.find("[data-index=1]");

        }

        nextPage.attr("data-active", "true");
        currentPage.attr("data-active", "false");
    }

    function prevPage() {
        const currentPage = slides.find("[data-active=true]");
        const currentIndex = currentPage.attr("data-index");
        let prevPage;

        if (currentIndex != 1) {
            prevPage = currentPage.prev();

        } else {
            prevPage = slides.find(`[data-index=` + coffinNumber + "]");

        }

        prevPage.attr("data-active", "true");
        currentPage.attr("data-active", "false");

    }

    nextPageButton.click(nextPage);
    prevPageButton.click(prevPage);
});