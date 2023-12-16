// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click',function(){
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
})

// navbar-fixed
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if(window.pageYOffset > fixedNav){
    header.classList.add('navbar-fixed');
  }else{
    header.classList.remove('navbar-fixed');
  }
}

// loader

// document.addEventListener("DOMContentLoaded", () => {
//   // Simulate an API request or any async operation
//   setTimeout(() => {
//       hideLoader();
//       showContent();
//   }, 5000); // Replace with your actual data loading logic and time

//   function hideLoader() {
//       const loader = document.getElementById("loader");
//       loader.style.display = "none";
//   }

//   function showContent() {
//       const content = document.getElementById("content");
//       content.style.display = "block";
//   }
// });
