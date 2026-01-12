const headerNav = document.querySelectorAll(".header");
const Honetext = document.querySelectorAll("h1");
const pragraph = document.querySelectorAll("p");
const kadiboxesall = document.querySelectorAll("div");
const btnanimation = document.querySelectorAll("button");
const spanel = document.querySelectorAll("span");
const Htwo = document.querySelectorAll("h2");
const Hfour = document.querySelectorAll("h4");
const Hfive = document.querySelectorAll("h5");
const imgel = document.querySelectorAll("img");
const options = {
  root: null,
  // threshold: 0.3,
  rootMargin: `50px`,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((el) => {
    if (el.isIntersecting) {
      el.target.classList.add("animate");
    } else {
      el.target.classList.remove("animate");
    }
  });
}, options);
headerNav.forEach((header) => {
  observer.observe(header);
});
Honetext.forEach((h1) => {
  observer.observe(h1);
});
pragraph.forEach((p) => {
  observer.observe(p);
});
kadiboxesall.forEach((div) => {
  observer.observe(div);
});
btnanimation.forEach((button) => {
  observer.observe(button);
});
spanel.forEach((span) => {
  observer.observe(span);
});
Htwo.forEach((h2) => {
  observer.observe(h2);
});
Hfour.forEach((h4) => {
  observer.observe(h4);
});
Hfive.forEach((h5) => {
  observer.observe(h5);
});
imgel.forEach((img) => {
  observer.observe(img);
});
// scroll up
let up = document.getElementById(`up`);

window.onscroll = function () {
  if (scrollY >= 400) {
    up.style.display = `block`;
  } else {
    up.style.display = `none`;
  }
};
up.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

let tabs = document.querySelector(".tabs");
let tabButtons = tabs.querySelectorAll(".tab");

let boxSocial = document.getElementById("box-social");

let pages = {
  one: document.getElementById("page-one"),
  two: document.getElementById("page-two"),
  three: document.getElementById("page-three"),
};

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));

    Object.values(pages).forEach((page) => {
      if (page) page.style.display = "none";
    });
    let addActive = button.classList.add("active");
    if (addActive) {
   
    }
    let targetPage = pages[button.id];
    if (targetPage) {
      targetPage.style.display = "flex";

    }
  });
});
function iconsupdate() {
  if (addActive == "active") {
    iContab.style.display = "flex";
  } else {
    iContab.style.display = "none";
  }
}

pages.one.style.display = "none";
pages.two.style.display = "none";
pages.three.style.display = "flex";

// navRESPONSIVe

let opeen = document.getElementById("open");
let closee = document.getElementById("close");
let containerMenu = document.getElementById("responsive-nav-bar-page");
let navbarRes = document.querySelector(".nav-bar-kadi");
let linkNavv = document.querySelectorAll(".linknavbaerresponsive");

const body = document.body;
containerMenu.style.maxHeight = "0px";

closee.addEventListener("click", () => {
  containerMenu.classList.remove("active");
  containerMenu.style.maxHeight = "0px";
  navbarRes.style.display = "block";
  body.classList.remove("noscroll");
});
linkNavv.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("noscroll");
    containerMenu.style.maxHeight = "0px";
    navbarRes.style.display = "block";
    containerMenu.classList.add("active");
  });
});
function toggleMenu() {
  if (containerMenu.style.maxHeight == "0px") {
    containerMenu.classList.add("active");
    containerMenu.style.maxHeight = "100vh";
    navbarRes.style.display = "none";
    body.classList.add("noscroll");
  } else {
    containerMenu.style.maxHeight = "0px";
    navbarRes.style.display = "block";
    body.classList.remove("noscroll");
  }
}

let panel = document.getElementsByClassName(`panel`);

function Updateaccor() {
  for (let i = 0; i < panel.length; i++) {
    panel[i].addEventListener(`click`, function () {
      for (let i = 0; i < panel.length; i++) {
        if (panel[i] != this) {
          panel[i].classList.remove(`active`);
        } else {
          this.classList.toggle(`active`);
        }
      }
    });
  }
}
Updateaccor();
(function checkAuth() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    window.location.href = "index.html";
  }
})();

// document.querySelector(".accordion-boxes").style.transition = "all 0,2s";
