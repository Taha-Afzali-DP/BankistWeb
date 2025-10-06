'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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
//! Element
/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const allSections = document.querySelectorAll('.section');
console.log(document.getElementById('section--1'));
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
document.getElementsByClassName('btn');
*/
const header = document.querySelector('.header');
const massage = document.createElement('div');
massage.classList.add('cookie-message');
// massage.textContent = 'we use cooked for improved fuctionality and analitys.';
massage.innerHTML =
  'we use cooked for improved fuctionality and analitys.  <button class="btn btn--close--cookie">Got it!</button>';
// header.prepend(massage);
header.append(massage);
// header.after(massage);
// header.before(massage);
// header.prepend(massage.cloneNode(true));
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    massage.remove();
  });
//! styles
massage.style.backgroundColor = '#37383d';
massage.style.width = '107%';
console.log(getComputedStyle(massage).color);
massage.style.height =
  Number.parseFloat(getComputedStyle(massage).height, 10) + 30 + 'px';
// document.documentElement.style.setProperty('--color-primary', 'orangered');
//! Attribut
const logo = document.querySelector('.nav__logo');
logo.alt = 'logo icon';
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.getAttribute('alt'));
logo.setAttribute('company', 'bankist');
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));
//! data attribute

//TODO btn scroll to (learn more)
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  console.log('X/Y', window.pageXOffset, window.pageYOffset);
  console.log(
    'Height/width',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //? scrolling
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});
/*
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('EventListner: Green!');
  h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1);
// h1.onmouseenter = function (e) {
//   alert('EventListner: Green!');
// };
 */
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  //* stop Bubeling
  // e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
//rgb(255,255,225)
