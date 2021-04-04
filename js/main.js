// scroll top bar
$(document).ready(addTopBarClass);
$(window).on("scroll", addTopBarClass);

function addTopBarClass() {
  if ($(window).scrollTop() > 100) {
    $("nav").addClass("scrollBg");
  } else {
    $("nav").removeClass("scrollBg");
  }
}

// typing header
var typed = new Typed(".typing", {
  strings: ["junior developer", "Senior developer"],
  typeSpeed: 100,
  startDelay: 10,
  smartBackspace: true,
  loop: true,
  loopCount: Infinity,
  backSpeed: 100,
});

// about
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    '<i class="fas fa-angle-left"></i>',
    '<i class="fas fa-angle-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
