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
    const mobileNavItems = $(".mobile-nav-items");
    const hungarian = $('.hungarian');
    const romanian = $('.romanian');
    let coffinCounter = 1;
    let gravestoneCounter = 1;
    let wreathCounter = 1;
    let i18n = $.i18n();

    function getLocale() {
        if (!localStorage.getItem('language')) {
            return "";
        } else {
            return localStorage.getItem('language');
        }
    }

    function changeLocale() {
        const locale = getLocale();
        console.log(locale);
        if (locale !== "") {
            i18n.locale = locale;
            if (locale === "hu") {
                romanian.addClass('appear');
                hungarian.removeClass('appear');
            } else {
                hungarian.addClass('appear');
                romanian.removeClass('appear');
            }
        } else {
            window.localStorage.setItem('language', 'hu');
            hungarian.addClass("appear");
        }
    }

    function setLocale(locale) {
        window.localStorage.setItem('language', locale);
        changeLocale();
        location.reload();
    }

    function loadLanguge() {
        i18n.load({
            'hu': `./script/i18n/hu.json`,
            'ro': `./script/i18n/ro.json`
        }).done(function() {
            changeLocale();
            $('body').i18n();
            $('head').i18n();
        });
    }



    hamburger.click(function() {
        mobileNav.toggleClass("open");
    });

    mobileNavItems.click(function() {
        hamburger.prop('checked', false);
        mobileNav.toggleClass("open");
    });

    coffinCounter = coffinSlides.children().length;
    gravestoneCounter = gravestoneSlides.children().length;
    wreathCounter = wreathSlides.children().length;

    function nextPage(slides, counter) {
        const slide = $(slides);
        const currentPage = slide.find("[data-active=true]");
        const currentIndex = currentPage.attr("data-index");
        let nextPage;
        if (currentIndex != counter) {
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

    hungarian.click(function() {
        console.log('hu');
        setLocale('hu');
    });
    romanian.click(() => {
        console.log('ro');
        setLocale('ro');
    });

    loadLanguge();

});