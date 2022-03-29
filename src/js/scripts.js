// document.addEventListener("DOMContentLoaded", () => {});
document.addEventListener("DOMContentLoaded", function (event) {
  const lang = document.querySelector(".footer__lang");
  const langSelect = document.querySelector(".footer__lang-select");
  // a.classList.add("b");

  lang.addEventListener("click", () => {
    langSelect.style.display = "block";
  });
  langSelect.addEventListener("click", () => {
    langSelect.style.display = "none";
  });
});

// const burger = document.querySelector(".burger"),
//   menu = document.querySelector(".menu"),
//   menuLink = document.querySelectorAll(".menu__ul"),
//   exit = document.querySelector(".menu__exit"),
//   overl = document.querySelector(".menu__overlay");

// // Кнопка меню
// burger.addEventListener("click", () => {
//   menu.classList.add("active");
// });
// exit.addEventListener("click", () => {
//   menu.classList.remove("active");
// });
// overl.addEventListener("click", () => {
//   menu.classList.remove("active");
// });
// menuLink.forEach((item) => {
//   item.addEventListener("click", () => {
//     menu.classList.remove("active");
//   });
// });

// counters.forEach((item, index) => {
//   linesSpan[index].style.width = item.innerHTML;
// });

// // Скроллинг вверх и вниз
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 2700) {
//     $(".scroll-up").fadeIn("fast");
//     $(".scroll-down").fadeOut("fast");
//   } else {
//     $(".scroll-up").fadeOut("fast");
//     $(".scroll-down").fadeIn("fast");
//   }
// });
// });
