// ---------------------------------open-3tab
document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll("[id^='open-content']");
  tabs.forEach(function (tab) {
    // Thêm class "fa-regular"
    tab.classList.add("fa-regular");
    // tab.classList.add("active");
    // Xóa class "fa-solid" nếu có
    tab.classList.remove("fa-solid");
    // tab.classList.remove("active");

    tab.addEventListener("click", function () {
      var tabId = this.id;
      toggleTab(tabId);
      tabs.forEach(function (t) {
        if (t.id === tabId) {
          // Thêm class "fa-solid" và xóa class "fa-regular" cho tab được chọn
          t.classList.remove("fa-regular");
          t.classList.add("fa-solid");
          t.classList.add("active");
        } else {
          // Thêm class "fa-regular" và xóa class "fa-solid" cho các tab khác
          t.classList.add("fa-regular");
          t.classList.remove("fa-solid");
          t.classList.remove("active");
        }
      });
    });
  });

  function toggleTab(tabId) {
    var tabsContent = document.querySelectorAll("[id^='tab-']");
    tabsContent.forEach(function (tabContent) {
      if (tabContent.id === "tab-" + tabId.slice(-1)) {
        tabContent.classList.remove("hidden");
      } else {
        tabContent.classList.add("hidden");
      }
    });
  }
});

// --------------------------------------slick-ẩn

$(".slider-hidden").slick({
  autoplay: true,
  dot: true,
  autoplaySpeed: 2000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    "<div class='icon-control-left icon-control-hidden'><i class='fa fa-angle-left' aria-hidden='true'></i></div>",
  nextArrow:
    "<div class='icon-control-right icon-control-hidden'><i class='fa fa-angle-right' aria-hidden='true'></i></div>",
});
// --------------------------------hiện câu trả lời

document.addEventListener("DOMContentLoaded", function () {
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
});
// --------------------hiện slider ẩn
document.addEventListener("DOMContentLoaded", function () {
  var modalButtons = document.querySelectorAll(".btn-slider");
  var overlay = document.getElementById("overlay_slider");
  var modal = document.getElementById("modal_slider");
  var closeButton = document.getElementById("close_btn_slider");

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
  dots: true,
  autoplaySpeed: 2000,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
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
  dots: true,
  autoplaySpeed: 2000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    "<div class='icon-control-ss6 icon-control-up'><i class='fa-solid fa-chevron-up'aria-hidden='true'></i></div>",
  nextArrow:
    "<div class='icon-control-ss6 icon-control-down'><i class='fa-solid fa-chevron-down'aria-hidden='true'></i></div>",
});

// -------------------------ss9-slider
$(".slider-ss9").slick({
  autoplay: true,
  dots: true,
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
//
// Function to show hidden image corresponding to clicked image
function showHiddenImage(imageId) {
  // Hide previously visible hidden images
  const previousHiddenImages = document.querySelectorAll(".slide.hidden");
  previousHiddenImages.forEach((hiddenImage) => {
    hiddenImage.classList.add("hidden");
  });
  // Show the corresponding hidden image
  const hiddenImage = document.getElementById(`img-hidden-${imageId}`);
  if (hiddenImage) {
    hiddenImage.classList.remove("hidden");
  }

  // Hide all other hidden images
  const allHiddenImages = document.querySelectorAll("[id^='img-hidden-']");
  allHiddenImages.forEach((img) => {
    if (img.id !== `img-hidden-${imageId}`) {
      img.classList.add("hidden");
    }
  });
}

// Event listener for clicking on images in the slider
const sliders = document.querySelectorAll(".btn-slider");
sliders.forEach((slider, index) => {
  const imageId = index + 1;
  slider.addEventListener("click", () => {
    showHiddenImage(imageId);
  });
});
// Function to show next slide
function showNextSlide() {
  const currentVisibleImage = document.querySelector(".slide:not(.hidden)");
  let nextHiddenImage = currentVisibleImage.nextElementSibling;
  if (!nextHiddenImage) {
    nextHiddenImage = document.querySelector(".slide.hidden");
  }
  currentVisibleImage.classList.add("hidden");
  nextHiddenImage.classList.remove("hidden");
}

// Function to show previous slide
function showPrevSlide() {
  const currentVisibleImage = document.querySelector(".slide:not(.hidden)");
  let prevHiddenImage = currentVisibleImage.previousElementSibling;
  if (!prevHiddenImage) {
    const allSlides = document.querySelectorAll(".slide");
    prevHiddenImage = allSlides[allSlides.length - 1];
  }
  currentVisibleImage.classList.add("hidden");
  prevHiddenImage.classList.remove("hidden");
}

// Event listeners for clicking on next and previous buttons
const nextButton = document.querySelector(".icon-control-right");
const prevButton = document.querySelector(".icon-control-left");

nextButton.addEventListener("click", showNextSlide);
prevButton.addEventListener("click", showPrevSlide);
