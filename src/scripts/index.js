'use strict';

const navbar = document.querySelector('.navbar');
const navbarButton = document.querySelector('.navbar__button');

navbarButton.onclick = () => {
  navbar.classList.toggle('navbar--open');
  navbarButton.calssList.toggle('navbar__button--active');
}
