window.onload = function () {
  var questions = document.querySelectorAll(".question");

  questions.forEach(function (question) {
    var id = question.querySelector("p").id;
    var icon = question.querySelector("i.fa-solid");
    document.getElementById(id).addEventListener("click", function () {
      console.log("kjdhfhd");
      question.classList.toggle("tra-loi");
      icon.classList.toggle("fa-chevron-down");
      icon.classList.toggle("fa-chevron-up");
    });
  });
};
// -------------------------mở form tim kiem
document.addEventListener("DOMContentLoaded", function () {
  var modalButtons = document.querySelectorAll(".btn-timkiem");
  var overlay = document.getElementById("overlay_timkiem");
  var modal = document.getElementById("modal_timkiem");
  var closeButton = document.getElementById("close_btn_timkiem");

  modalButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("kjdhfhd");

      overlay.style.display = "block";
      modal.style.display = "block";
    });
  });

  closeButton.addEventListener("click", closeModal);

  function closeModal() {
    overlay.style.display = "none";
    modal.style.display = "none";
  }
});
// -------------------------mở form đăng kí
document.addEventListener("DOMContentLoaded", function () {
  var modalButtons = document.querySelectorAll(".modal-btn");
  var overlay = document.getElementById("overlay");
  var modal = document.getElementById("modal");
  var closeButton = document.getElementById("close-btn");

  modalButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      overlay.style.display = "block";
      modal.style.display = "block";
    });
  });

  closeButton.addEventListener("click", closeModal);

  function closeModal() {
    overlay.style.display = "none";
    modal.style.display = "none";
  }
});

// --------------fix navbar

const fixedButton = document.getElementById("fixed-navbar");
let isButtonFixed = false;

window.addEventListener("scroll", function () {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition < 10) {
    fixedButton.classList.remove("fixed");
    isButtonFixed = false;
  } else if (!isButtonFixed && currentScrollPosition >= 50) {
    fixedButton.classList.add("fixed");
    isButtonFixed = true;
  }
});

//   ---------------------------------sửa nút khi click
function toggleClass(element) {
  var elementsWithClickClass = document.querySelectorAll("p.click-ss3");
  var class1 = document.querySelector(".class-1"); // Get the element with class "class-1"
  var class2 = document.querySelector(".class-2"); // Get the element with class "class-2"

  elementsWithClickClass.forEach(function (item) {
    item.classList.remove("click-ss3");
    class1.classList.toggle("hidden");
  });

  element.classList.add("click-ss3");
  class2.classList.toggle("hidden");
}

// ----------------------------------slide-ss3
$(".slider-ss3").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
      },
    },
  ],
  prevArrow:
    "<div class='icon-control-left icon-control'><i class='fa fa-angle-left' aria-hidden='true'></i></div>",
  nextArrow:
    "<div class='icon-control-right icon-control'><i class='fa fa-angle-right' aria-hidden='true'></i></div>",
});
// ---------------------------------open-4tab
document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll("[id^='open-tab']");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var tabId = this.id;
      toggleTab(tabId);
      tabs.forEach(function (t) {
        if (t.id === tabId) {
          t.classList.add("click-ss4");
        } else {
          t.classList.remove("click-ss4");
        }
      });
    });
  });

  function toggleTab(tabId) {
    var tabsContent = document.querySelectorAll("[class^='open-tab']");
    tabsContent.forEach(function (tabContent) {
      if (tabContent.classList.contains(tabId)) {
        tabContent.classList.remove("hidden");
      } else {
        tabContent.classList.add("hidden");
      }
    });
  }
});
// ----------------------------------------------slide-ss6
$(".slider-ss6").slick({
  autoplay: true,
  dot: true,
  appendDots: "<div class='slick-slider-dots'></div>",
  autoplaySpeed: 2000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    "<div class='icon-control-ss6'><i class='fa-solid fa-chevron-up'aria-hidden='true'></i></div>",
  nextArrow:
    "<div class='icon-control-ss6'><i class='fa-solid fa-chevron-down'aria-hidden='true'></i></div>",
});
// ---------------------------------------------------------ấn mở câu trả lời

// -------------------------ss9-slider
$(".slider-ss9").slick({
  autoplay: true,
  dot: true,
  appendDots: "<div class='slick-slider-dots'></div>",
  autoplaySpeed: 2000,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,

  prevArrow:
    "<div class='icon-control-left icon-control'><i class='fa fa-angle-left' aria-hidden='true'></i></div>",
  nextArrow:
    "<div class='icon-control-right icon-control'><i class='fa fa-angle-right' aria-hidden='true'></i></div>",
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// --------------------------mở và đóng menubobile
document.addEventListener("DOMContentLoaded", function () {
  var triggerButtons = document.getElementsByClassName("open-nav-mb");
  for (var i = 0; i < triggerButtons.length; i++) {
    triggerButtons[i].addEventListener("click", function () {
      var menu = document.getElementById("menu");
      menu.classList.remove("active-out");
      menu.classList.add("active-in");

      console.log("dg mở nav");
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var trigger = document.getElementsByClassName("close-nav");
  for (var i = 0; i < trigger.length; i++) {
    trigger[i].addEventListener("click", function () {
      var menu = document.getElementById("menu");
      menu.classList.remove("active-in");
      menu.classList.add("active-out");
      console.log("đóng nav");

      // Gọi hàm để xóa class sau 3 giây
      removeClassAfter3Seconds("menu", "active-out");
    });
  }
});

function removeClassAfter3Seconds(elementId, className) {
  setTimeout(function () {
    var element = document.getElementById(elementId);
    if (element) {
      element.classList.remove(className);
    }
  }, 1300);
}
// ----------------------open menu lv 2

window.onload = function () {
  var icons = document.querySelectorAll(".mo-mn-lv2 i.fa-solid");

  icons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      var sublist = icon.parentNode.nextElementSibling; // Lấy phần tử <ul> kế tiếp của phần tử cha của biểu tượng đang được click
      if (sublist.classList.contains("list-lv1")) {
        sublist.classList.toggle("open-list-lv1");
      }
      icon.classList.toggle("fa-chevron-down");
      icon.classList.toggle("fa-chevron-up");
    });
  });
};
