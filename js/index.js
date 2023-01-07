window.addEventListener('DOMContentLoaded', function () {


  document.querySelector(".search_btn_open").addEventListener("click", function () {
    document.querySelector(".search_form").classList.add("search_form_active");
    this.classList.add("active");
  })

  document.addEventListener("click", function (e) {
    let target = e.target;
    let form = document.querySelector(".search_form");
    if (target.closest(".search_btn_close")) {
      form.classList.remove("search_form_active");
      form.querySelector(".search_form_input").value = "";
      document.querySelector('.search_btn_open').classList.remove("active")

    }
  })


  const swiper = new Swiper('.hero_swiper', {

    speed: 300,
    loop: true,
    pagination: {
      el: '.hero_pagination',
      type: 'bullets',
      clickable: true
    },
    effect: 'cowerflow',
    grabCursor: true
  });


  document.querySelectorAll('.step-list_btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.step-list_btn').forEach(function (btn) {
        btn.classList.remove('step-list_btn--active')
      });
      e.currentTarget.classList.add('step-list_btn--active');
      document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('tabs-item--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
  });


  $(function () {
    $(".question_list").accordion({
      icons: false,
      heightStyle: "content",
      collapsible: true,
      active: false
    });
  });


  document.querySelector(".header_burger").addEventListener("click", function () {
    document.querySelector(".header_nav").classList.add("active");
  })
  document.querySelector(".header_burger_close").addEventListener("click", function () {
    document.querySelector(".header_nav").classList.remove("active");
  })


});

