$(document).ready(function() {
    const hamburger = $(".checkbox");
    const mobileNav = $(".mobile-nav");

    hamburger.click(function() {
        mobileNav.toggleClass("open");
    });
});