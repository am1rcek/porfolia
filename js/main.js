let elMenuBtn = document.querySelector(".menu-btn");
let elModal = document.querySelector(".nav");
let elLinethird =document.querySelector(".line2");
let elLineOne =document.querySelector(".line1");
let elLineThree =document.querySelector(".line3");
let elLine = document.querySelectorAll('.experience__line');
let elNavItem = document.querySelectorAll(".nav__item");
let elForm = document.querySelector(".contact__form");
let elUserName = document.querySelector(".user__name--inp").value;
let elPhoneNumber = document.querySelector(".user__phone--inp").value;
let elEmail = document.querySelector(".user__email--inp").value;
let elMessage = document.querySelector(".user__message--inp").value;



elMenuBtn.addEventListener("click",function(){
    elModal.classList.toggle("grow-height");
    elLinethird.classList.toggle("remove-line");
    elLineOne.classList.toggle("rotate-line1");
    elLineThree.classList.toggle("rotate-line3");
})


elForm.addEventListener("submit",function(e){
  e.preventDefault()

  // https://api.telegram.org/bot<token>/getUpdates
  elForm.reset()
})


if(this.window.scrollY > 1429 && this.window.scrollY < 2933){
  this.document.querySelector("body").classList.add("change-content")
}
else{
  this.document.querySelector("body").classList.remove("change-content")
}

window.addEventListener("scroll",function(){
  const Elheader = document.querySelector("header");
  Elheader.classList.toggle("header-bg",window.scrollY > 200);
});
const Elheader = document.querySelector("header");
Elheader.classList.toggle("header-bg",window.scrollY > 200);

elNavItem.forEach((navLink) => {
  window.addEventListener("scroll",function(){
    if(this.window.scrollY > 0){
      elNavItem.forEach(item => item.classList.remove("nav__link--active"))
      elNavItem[0].classList.add("nav__link--active");
    }
    if(this.window.scrollY > 410){
      elNavItem.forEach(item => item.classList.remove("nav__link--active"))
      elNavItem[1].classList.add("nav__link--active");
    }
    if(this.window.scrollY > 826){
      elNavItem.forEach(item => item.classList.remove("nav__link--active"))
      elNavItem[2].classList.add("nav__link--active");
    }
    if(this.window.scrollY > 1707){
      elNavItem.forEach(item => item.classList.remove("nav__link--active"))
      elNavItem[3].classList.add("nav__link--active");
    }
    if(this.window.scrollY > 2786){
      elNavItem.forEach(item => item.classList.remove("nav__link--active"))
      elNavItem[4].classList.add("nav__link--active");
    }
    if(this.window.scrollY > 3542){
      elNavItem.forEach(item => item.classList.remove("nav__link--active"))
      elNavItem[5].classList.add("nav__link--active");
    }
  })
})




var typed = new Typed('.name', {
  strings: [
    "Husan",
    "Creative",
  ],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});











