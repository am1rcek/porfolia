let elMenuBtn = document.querySelector(".menu-btn");
let elModal = document.querySelector(".nav");
let elLinethird =document.querySelector(".line2");
let elLineOne =document.querySelector(".line1");
let elLineThree =document.querySelector(".line3");
let elLine = document.querySelectorAll('.experience__line');
let elNavItem = document.querySelectorAll(".nav__item");

elMenuBtn.addEventListener("click",function(){
    elModal.classList.toggle("grow-height");
    elLinethird.classList.toggle("remove-line");
    elLineOne.classList.toggle("rotate-line1")
    elLineThree.classList.toggle("rotate-line3")
})


elLine.forEach((item) => {
  window.addEventListener("scroll",function(){
    header = document.querySelector("header");
    header.classList.toggle("header-bg",window.scrollY > 60);
    item.classList.toggle("float",window.scrollY > 300);
    console.log(this.window.scrollY)
  })
})

elNavItem.forEach((navLink) => {
  window.addEventListener("scroll",function(){
    console.log(navLink)
    if(this.window.scrollY > 300){
      elNavItem[1].classList.add("nav__link--active");
      elNavItem[0].classList.remove("nav__link--active");
    }
    else if(this.window.scrollY < 300){
      elNavItem[0].classList.add("nav__link--active");
      elNavItem[1].classList.remove("nav__link--active");
    };
    console.log(this.window.scrollY)
  })
})




var typed = new Typed('.name', {
  strings: [
    "Husan",
    "HarDev",
    "Creative",
  ],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});











