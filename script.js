document.addEventListener("DOMContentLoaded", function () {
  feather.replace(); // Feather icon diganti dulu

  const navbarNav = document.querySelector(".navbar-nav");
  const menuBar = document.querySelector("#menu-bar");
  const searchForm = document.querySelector(".search-form");
  const searchBox = document.querySelector("#search-box"); // perbaikan id
  const shoppingCart = document.querySelector(".shopping-cart");
  const shoppingCartBtn = document.querySelector("#shopping-cart-button");

  // Toggle menu
  menuBar.addEventListener("click", (e) => {
    navbarNav.classList.toggle("active");
    e.preventDefault();
  });

  // Toggle search
  document.querySelector("#search-button").addEventListener("click", (e) => {
    searchForm.classList.toggle("active");
    searchBox?.focus();
    e.preventDefault();
  });

  // Toggle cart
  shoppingCartBtn.addEventListener("click", (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
  });

  // Klik di luar untuk close semua
document.addEventListener("click", function (e) {
  if (!e.target.closest("#menu-bar") && !e.target.closest(".navbar-nav")) {
    navbarNav.classList.remove("active");
  }
});


  document.addEventListener("click", function (e) {
    if (!e.target.closest("#menu-bar") && !e.target.closest(".navbar-nav")) {
      menuBar.classList.remove("active");
    }

    if (
      !e.target.closest("#search-button") &&
      !e.target.closest(".search-form")
    ) {
      searchForm.classList.remove("active");
    }

    if (
      !e.target.closest("#shopping-cart-button") &&
      !e.target.closest(".shopping-cart")
    ) {
      shoppingCart.classList.remove("active");
    }
  });
});


