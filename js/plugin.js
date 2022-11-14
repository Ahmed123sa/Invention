$(".thumbs img").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".main img").hide().attr("src", $(this).attr("src")).fadeIn(500);
});
$(".pros .main .right").on("click", function () {
  if ($(".thumbs .active").is(":last-child")) {
    $(".thumbs img").eq(0).click();
  } else {
    $(".thumbs .active").next().click();
  }
});
$(".pros .main .left").on("click", function () {
  if ($(".thumbs img.active").is(":first-child")) {
    $(".thumbs img:last").click();
  } else {
    $(".thumbs img.active").prev().click();
  }
});
/////
let nav = document.querySelector(".navbar-toggler");
let toggleMenu = document.querySelector(".navbar .navbar-collapse");
nav.onclick = function () {
  this.style.boxShadow = "none";
  this.style.opacity = "100";
};
////
window.onscroll = function () {
  if (this.pageYOffset > 50) {
    document.querySelector(".navbar ").classList.add("navbar-dark", "bg-dark");
  } else {
    document
      .querySelector(".navbar ")
      .classList.remove("navbar-dark", "bg-dark");
  }
};

$(".loading .loader").fadeOut(6000, function () {
  $(this).parent().fadeOut(2000);
});

$(
  ".projects .pro-one img,.projects .pro-Two img,.projects .pro-Three img,.projects .pro-four img,.projects .pro-five img,.projects .pro-six img,.projects .pro-seven img,.projects .pro-eight img, .projects .pro-nine img"
).on("click", function () {
  $(".navbar ").removeClass("fixed-top");
  $(".overlay-sec").addClass("d-show").removeClass("d-hide");
  $(".overlay img").hide().attr("src", $(this).attr("src")).fadeIn(500);
  $(".carousel-indicators").addClass("d-hide");

  $(".overlay-sec svg").on("click", function () {
    $(".overlay-sec").addClass("d-hide").removeClass("d-show");
    $(".carousel-indicators").removeClass("d-hide");
    $(".navbar ").addClass("fixed-top");
  });
});

/////
if (platform.name === "Safari") {
  $(".landing").css("background-attachment", "inherit");
}
