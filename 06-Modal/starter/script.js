'use strict';

// ______________________________________________________________________
/*
* Limitations of querySelector()
--> So whenever we use querySelector() with a selector which actually matches multiple elements only the first one will get selected

-------- 1] USE 'querySelectorAll()' ----------
--> For selecting multiple matching elements
*/

// NORMAL CODE
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// // const btnShowModal = document.querySelector('.show-modal');
// const btnShowModal = document.querySelectorAll('.show-modal');
// const btnCloseModal = document.querySelector('.close-modal');

// console.log(btnShowModal);

// for (let i = 0; i < btnShowModal.length; i++) {
//   console.log(btnShowModal[i].textContent);
//   btnShowModal[i].addEventListener('click', function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// }

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

/*
// ------- AFTER REFACTORING THE CODE -------------
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// const btnShowModal = document.querySelector('.show-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
*/

// CLASSES ALLOWS TO BASICALLY AGGREGATE MULTIPLE CSS PROPERTIES IN JUST ONE CONTAINER
// FUNCTION IS LIKE A CONTAINER HAVING A LOT OF PROPERTIES IN IT
// ______________________________________________________________________

// ______________________________________________________________________
/*
---------- 2] HANDLING AN 'ESC' KEYPRESS BUTTTON ----------
- JAVASCRIPT GENERATE AN OBJECT AND THAT OBJECT CONTAIN ALL THE INFORMATION ABOUT THE EVENT AND WE CAN THEN ACCES THAT OBJECT IN THE 'EVENT HANDLER FUNCTION'
- WHEN AN EVENT TAKES PLACE WE CAN ACCESS INFORMATION ABOUT THAT EVENT IN THE EVENT HANDLER FUNCTION

--IN SIMPLE WORDS--
To tell JavaScript that when the 'keypress' event happens pass the 'event object' as an argument
*/

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// const btnShowModal = document.querySelector('.show-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// ADDING A 'KEYPRESS' EVENT

// HERE 'E' IS A CALLBACK FUNCTION
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ______________________________________________________________________
