/*БУРГЕР*/
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');

let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
  function () {

    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  }
)

menuLinks.forEach(function (el) {
  el.addEventListener('click',
    function () {

      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');
      document.body.classList.remove('stop-scroll');
    })
})


/*Кнопка поиска*/

let btnSearh = document.querySelector(".header__search-btn");
let fieldSearch = document.querySelector(".header__search");
let btnCloseSearch = document.querySelector(".header__close-search");

btnSearh.addEventListener("click", function () {
  fieldSearch.classList.add("header__search--active");
});

btnCloseSearch.addEventListener("click", function () {
  fieldSearch.classList.remove("header__search--active");
});

/*Свайпер*/
const swiper = new Swiper('.swiper', {
  //Цикличность
  loop: true,
  // настройки пагинации
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  //перевод пагинации в F12
  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}',
  }
});

/*Табы*/
document.querySelectorAll(".tabs-list__btn").forEach(function (tabsBtn) {

  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll(".tabs-list__btn").forEach(function (btn) {
      btn.classList.remove("tabs-list__btn--active");
    });

    e.currentTarget.classList.add("tabs-list__btn--active");
    document.querySelectorAll(".tabs-item").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item--active");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item--active");
  });
});


/*Аккордеон*/
new Accordion('.accordion-container');
