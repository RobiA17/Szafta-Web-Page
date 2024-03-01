$(document).ready(function () {
  const hungarian = $(".hungarian");
  const romanian = $(".romanian");
  const i18n = $.i18n();

  function getLocale() {
    if (!localStorage.getItem("language")) {
      return "";
    } else {
      return localStorage.getItem("language");
    }
  }

  function changeLocale() {
    const locale = getLocale();
    console.log(locale);
    if (locale !== "") {
      i18n.locale = locale;
      if (locale === "hu") {
        romanian.addClass("appear");
        hungarian.removeClass("appear");
      } else {
        hungarian.addClass("appear");
        romanian.removeClass("appear");
      }
    } else {
      window.localStorage.setItem("language", "hu");
      hungarian.addClass("appear");
    }
  }

  function setLocale(locale) {
    window.localStorage.setItem("language", locale);
    changeLocale();
    location.reload();
  }

  function loadLanguge() {
    i18n
      .load({
        hu: `./script/i18n/hu.json`,
        ro: `./script/i18n/ro.json`,
      })
      .done(() => {
        changeLocale();
        $("body").i18n();
        $("head").i18n();
      });
  }

  hungarian.click(function () {
    console.log("hu");
    setLocale("hu");
  });
  romanian.click(() => {
    console.log("ro");
    setLocale("ro");
  });

  loadLanguge();
});
