const header = document.querySelector("header");
const navBtn = document.querySelector("header .nav-btn");
const nav = document.querySelector("header nav");
const navWrapper = document.querySelector("header .nav-wrapper");
const navLinksBox = document.querySelector("nav .nav-links");

navBtn.addEventListener("click", () => {
  nav.classList.add("active");
  setTimeout(() => {
    navWrapper.classList.add("show-nav");
  }, 0);
});

// when click outside navbar remove class active

nav.addEventListener("click", (e) => {
  if (e.target !== navLinksBox) {
    navWrapper.classList.remove("show-nav");
    setTimeout(() => {
      nav.classList.remove("active");
    }, 400);
  }
});

// add and remove class active on links

const links = document.querySelectorAll("nav .nav-link");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// Active Link on Page Scroll - Spy Indicator

const sections = document.querySelectorAll(
  "#home, #features, #plans, #testimonials"
);

function activateLink() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop - 100) {}

  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");
}

// sticky header on the top

const sticky = header.offsetTop + 150;

function checkStickyNavbar() {
  if (window.scrollY >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// top page button

let topBtn = document.querySelector(".top-btn");

function scrollFunction() {
  if (
    document.body.scrollTop > 520 ||
    document.documentElement.scrollTop > 520
  ) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
}

topBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

activateLink();
checkStickyNavbar();

window.addEventListener("scroll", () => {
  activateLink();
  checkStickyNavbar();
  scrollFunction();
});

// page animation

const htmlAnimate = document.querySelectorAll(
  ".slide-up, .slide-RtL, .slide-LtR"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target;
      if (target.classList.contains("slide-up")) {
        target.classList.add("show-slide-up");
      } else if (target.classList.contains("slide-RtL")) {
        target.classList.add("show-slide-RtL");
      } else if (target.classList.contains("slide-LtR")) {
        target.classList.add("show-slide-LtR");
      }
    }
  });
});

htmlAnimate.forEach((el) => {
  observer.observe(el);
});

// carousal app in hero section

const carousalImgs = document.querySelectorAll(".hero .hero-phone img");

let carousalNum = 0;

function showNextImage() {
  carousalImgs[carousalNum].classList.remove("active");
  carousalNum = (carousalNum + 1) % carousalImgs.length;
  carousalImgs[carousalNum].classList.add("active");
}

setInterval(showNextImage, 2000);

carousalImgs[carousalNum].classList.add("active");
