'use strict';

///////////////////////////////////////
//////   Modal window   ///////////////
///////////////////////////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// Elements
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const allButtons = document.getElementsByTagName('button');

// Functions for eventListeners
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Cookies message btn
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies fro improved functionality and analyctis.       <button class="btn btn--close-cookie">Got it!</button>';

header.append(message); // last child
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

// Styles for cookies
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; // getComputedStyle will give us css atributes value

// Smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  // Modern browsers
  section1.scrollIntoView({ behavior: 'smooth' });
  // Older browsers
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
});
