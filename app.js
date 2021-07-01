const hamburger = document.querySelector('.header .nav-bar .list .hamburguer');
const mobile_menu = document.querySelector('.header .nav-bar .list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',() =>{
hamburger.classList.toggle('active');
});