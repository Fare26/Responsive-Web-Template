let menuBtn = $("#menu-btn");
menuBtn.on("click", function (event) {
  let menuSection = $("#menu-section");
  let mainContainer = $("#main-container");
  let exitBtn = $("#avatar-container i");
  let navbar = $("#navbar a li");
  navbar.each(function () {
    $(this).on("click", exitMenu);
  });
  exitBtn.css("display", "block");
  exitBtn.on("click", exitMenu);
  menuSection.css({
    width: "300px",
    transition: "0.5s",
    zIndex: "10",
  });
  mainContainer.css({ opacity: "0.5", transition: "opacity 0.5s linear" });
});

function exitMenu() {
  let menuSection = $("#menu-section");
  let mainContainer = $("#main-container");
  menuSection.css({
    width: "0",
    transition: "0.2s",
  });
  mainContainer.css({ opacity: "1", transition: "opacity 0.2s linear" });
}

$(window).resize(function (event) {
  let menuSection = $("#menu-section");
  let mainContainer = $("#main-container");
  let exitBtn = $("#avatar-container i");
  if (event.currentTarget.innerWidth > 992) {
    menuSection.css({
      width: "300px",
    });
    mainContainer.css({ opacity: "1" });
    exitBtn.css("display", "none");
  } else {
    exitBtn.css("display", "block");
    menuSection.css({
      width: "0",
    });
    mainContainer.css({ opacity: "1" });
  }
});
