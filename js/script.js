//navbar start
// toogle clas active menu
const navbarnav = document.querySelector(".navbar-nav");
// ketika menu dik=clik
document.querySelector("#menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

//toogle clas active search
const searchfrom = document.querySelector(".search-from ");
const searchbox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchfrom.classList.toggle("active");
  searchbox.focus();
  e.preventDefault();
};

// toogle cart
const cart = document.querySelector(".shoping-cart");

document.querySelector("#cart-btn").onclick = (e) => {
  cart.classList.toggle("active");
  e.preventDefault();
};

//klik diluar elemt
const menu = document.querySelector("#menu");
const sb = document.querySelector("#search-button");
const crt = document.querySelector("#cart-btn");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchfrom.contains(e.target)) {
    searchfrom.classList.remove("active");
  }
  if (!crt.contains(e.target) && !cart.contains(e.target)) {
    cart.classList.remove("active");
  }
});

// modalbox

const detailmodal = document.querySelector("#item-modal");
const detailbtns = document.querySelectorAll(".preview-button");

detailbtns.forEach((btn) => {
  btn.onclick = (e) => {
    detailmodal.style.display = "flex";
    e.preventDefault();
  };
});

// clik tombol close
document.querySelector(".modal .close-item").onclick = (e) => {
  detailmodal.style.display = "none";
  e.preventDefault();
};

//klik diluar modal

window.onclick = (e) => {
  if (e.target == detailmodal) {
    detailmodal.style.display = "none";
  }
};
// search start
