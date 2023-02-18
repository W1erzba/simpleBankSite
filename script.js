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
message.classList.add('cookie-messsage');
message.innerHTML =
  'We use cookies fro improved functionality and analyctis. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message); // last child

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());
