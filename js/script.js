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

document.addEventListener("DOMContentLoaded", () => {
  // Simulate an API request or any async operation
  setTimeout(() => {
      hideLoader();
      showContent();
  }, 1500); // Replace with your actual data loading logic and time

  function hideLoader() {
      const loader = document.getElementById("loader");
      loader.style.display = "none";
  }

  function showContent() {
      const content = document.getElementById("content");
      content.style.display = "block";
  }
});

// dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
const logo = document.querySelector('#logo');
const iconlogo = document.querySelector('#iconlogo');



darkToggle.addEventListener('click', function(){
  if(darkToggle.checked){
    html.classList.add('dark');
    localStorage.theme = 'dark';
    logo.src = '../assets/logo/logowhite.png';
    iconlogo.src = '../assets/logo/iconlogo-white.png';
    
  }else{
    html.classList.remove('dark');
    localStorage.theme = 'light';
    logo.src = '../assets/logo/logoblack.png';
    iconlogo.src = '../assets/logo/iconlogo.png';
  }
})

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
  logo.src = '../assets/logo/logowhite.png';
  iconlogo.src = '../assets/logo/iconlogo-white.png';
} else {
  darkToggle.checked = false;
  logo.src = '../assets/logo/logoblack.png';
  iconlogo.src = '../assets/logo/iconlogo.png';
}