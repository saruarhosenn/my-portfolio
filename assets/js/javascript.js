/*------- LOADER -------*/
var loader = document.querySelector(".loader");
window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

/*------- HUMBURGER MENU ICON -------*/
function myFunction(x) {
  x.classList.toggle("change");
}

/*----------- TYPING TEXT -----------*/
var typeText = document.querySelector(".typeText");
var textToBeTypedArr = ["Front End Developer.", "freelancer."];
var index = 0,
  isAdding = true,
  textToBeTypedIndex = 0;

function playAnim() {
  setTimeout(
    function () {
      // set the text of typeText to a substring of the text to be typed using index.
      typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index);
      if (isAdding) {
        // adding text
        if (index > textToBeTypedArr[textToBeTypedIndex].length) {
          // no more text to add
          isAdding = false;
          //break: wait 2s before playing again
          setTimeout(function () {
            playAnim();
          }, 1000);
          return;
        } else {
          // increment index by 1
          index++;
        }
      } else {
        // removing text
        if (index === 0) {
          // no more text to remove
          isAdding = true;
          //switch to next text in text array
          textToBeTypedIndex =
            (textToBeTypedIndex + 1) % textToBeTypedArr.length;
        } else {
          // decrement index by 1
          index--;
        }
      }
      // call itself
      playAnim();
    },
    isAdding ? 120 : 60
  );
}
// start animation
playAnim();

var h = document.documentElement,
  b = document.body,
  st = "scrollTop",
  sh = "scrollHeight",
  progress = document.querySelector(".progress"),
  scroll;

document.addEventListener("scroll", function () {
  scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  progress.style.setProperty("--scroll", scroll + "%");
});

/*---------- MODAL ----------*/
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

/*------------ SLIDER ------------*/
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 1500,
  grabCursor: true,
  // init: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
});

/*--------- BACK TO TOP BUTTON ---------*/
var mybutton = document.getElementById("up__btn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.opacity = "1";
    mybutton.style.right = "3rem";
  } else {
    mybutton.style.opacity = "0";
    mybutton.style.right = "-10rem";
  }
}
mybutton.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
