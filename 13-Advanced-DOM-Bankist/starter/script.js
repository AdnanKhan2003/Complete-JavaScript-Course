'use strict';

///////////////////////////////////////
// Modal window

const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const scrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const navLinksGroup = document.querySelectorAll('.nav__links');
const navLinksAll = document.querySelectorAll('.nav__link');
const containerTab = document.querySelector('.operations__tab-container');
const operationsContent = document.querySelectorAll('.operations__content');
const tabs = document.querySelectorAll('.operations__tab');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const logo = document.querySelector('.nav__logo');

// IMPLEMENTING OPEN & CLOSE MODAL
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// IMPLEMENTING SMOOTH SCROLL

scrollTo.addEventListener('click', e => {
  // console.log('header', e.target.getBoundingClientRect());
  const headerCoords = e.target.getBoundingClientRect();

  // console.log('section-1', section1.getBoundingClientRect());
  const s1Coords = section1.getBoundingClientRect();

  // console.log(window.pageXOffset, window.pageYOffset);

  // console.log(document.documentElement.clientWidth);
  // console.log(document.documentElement.clientHeight);

  // window.scrollTo(
  //   s1Coords.x + window.pageXOffset,
  //   s1Coords.y + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1Coords.x + window.pageXOffset,
  //   top: s1Coords.y + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// navLinksAll.forEach(btn =>
//   btn.addEventListener('click', e => {
//     e.preventDefault();

//     let id = e.target.getAttribute('href');

//     // OLD school way
//     // const s1CoordX = document.querySelector(id).getBoundingClientRect().x;
//     // const s1CoordY = document.querySelector(id).getBoundingClientRect().y;
//     // console.log(s1CoordX, s1CoordY, id);
//     // window.scrollTo({
//     //   left: window.pageXOffset + s1CoordX,
//     //   top: window.pageYOffset + s1CoordY,
//     //   behavior: 'smooth',
//     // });

//     // MODERN way
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

// EVENT DELEGATION
// BETTER OPTIMIZATION & PERFORMANCE
// Capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation.
// The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

// 1. Add event listener to common parent element
// 2. Determine what element originated the event (e.target())

navLinksGroup.forEach(btn =>
  btn.addEventListener('click', e => {
    e.preventDefault();

    // MATCHING strategy (because we want CERRAIN ELEMENTS ONLY)
    if (e.target.classList.contains('nav__link')) {
      let id = e.target.getAttribute('href');

      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  })
);

// TABBED COMPONENT

containerTab.addEventListener('click', e => {
  e.preventDefault();

  const clicked = e.target.closest('.operations__tab');

  // GUARD clause
  if (!clicked) return;

  // REMOVING ACTIVE CLASSES
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  operationsContent.forEach(o =>
    o.classList.remove('operations__content--active')
  );

  // ACTIVATING TABS
  clicked.classList.add('operations__tab--active');

  // ACTIVATING OPERATIONS CONTENT
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
  // .querySelector(`operations__content--${clicked.dataset.tab}`).
});

// NAVBAR LINKS

// IMPLEMENTING NAV HOVER
// const navHoverFunc = (e, opacity) => {
//   e.preventDefault();

//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = e.target.closest('.nav').querySelectorAll('.nav__link');

//     siblings.forEach(s => {
//       if (s !== link) s.style.opacity = opacity;

//       logo.style.opacity = opacity;
//     });
//   }
// };

const navHoverFunc = function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = e.target.closest('.nav').querySelectorAll('.nav__link');
    const logoImg = document.querySelector('.nav__logo');

    siblings.forEach(s => {
      if (s !== link) s.style.opacity = this;

      logoImg.style.opacity = this;
    });
  }
};

// IMPLEMENTING STICKY NAVBAR USING 'SCROLL' EVENT (WINDOW) (INEFFICIENT)

// PASSING "MULTIPLE" ARGUMENTS TO EVENT HANDLERS
// nav.addEventListener('mouseover', e => navHoverFunc(e, 0.5));
// nav.addEventListener('mouseout', e => navHoverFunc(e, 1));
// PASSING AN ARGUMENT TO EVENT HANDLERS
nav.addEventListener('mouseover', navHoverFunc.bind(0.5));
nav.addEventListener('mouseout', navHoverFunc.bind(1));

// // IMPLEMENTING STICKY NAV OliveN SCROLL
// const s1Coords = section1.getBoundingClientRect();

// // Using scroll event for performing acion at certain position of the page is bad for performance
// window.addEventListener('scroll', function () {
//   // const pageY = window.pageYOffset;
//   const scrollY = window.scrollY;

//   if (scrollY > s1Coords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
//   // if (pageY > s1Coords.top) nav.classList.add('sticky');
//   // else nav.classList.remove('sticky');
// });

// IMPLEMENTING "STICKY" NAVBAR USING "INTERSECTION OBSERVER API" (EFFICIENT)

const navHeight = document.querySelector('.nav').getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: [0, 0.2],
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// REVEALING ELEMENTS ON SCROLL

const sectionAll = document.querySelectorAll('.section');

const obsSlide = function (entries, observer) {
  const [entry] = entries;

  // GUARD CLAUSE
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  // Here after our work is finished but still the 'observer' continue observing which is not needed which is not good for performance
  // So we then do unobserve

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(obsSlide, {
  root: null,
  threshold: 0.15,
});
sectionAll.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
// IMPLEMENTING LAZY LOADING IMAGES

const imgFeatures = document.querySelectorAll('img[data-src]');

// const lazyLoading = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   const newSrc = String(entry.target.getAttribute('src')).replace('-lazy', '');
//   entry.target.src = newSrc;

//   // The replacing of the src attribute basically happens behind the scenes javascript finds the new the image that it should load and display here and it does this behind the scenes. And once it loading that image it will emit the load event. And the load event is just like any other event. And we can listen for it and do something
//   entry.target.addEventListener('load', () =>
//     entry.target.classList.remove('lazy-img')
//   );

//   observer.unobserve(entry.target);
// };

const lazyLoading = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  // The replacing of the src attribute basically happens behind the scenes javascript finds the new the image that it should load and display here and it does this behind the scenes. And once it loading that image it will emit the load event. And the load event is just like any other event. And we can listen for it and do something
  entry.target.addEventListener('load', () =>
    entry.target.classList.remove('lazy-img')
  );

  observer.unobserve(entry.target);
};

const lazyImgObserver = new IntersectionObserver(lazyLoading, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgFeatures.forEach(img => lazyImgObserver.observe(img));

// IMPLEMENTING SLIDER

const sliderSection = function () {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dots = document.querySelectorAll('.dots__dot');
  const maxSlide = slides.length - 1;
  const containerDots = document.querySelector('.dots');
  let currSlide = 0;

  // slider.style.transform = `scale(0.4) translateX(-500px)`;
  // slider.style.overflow = 'visible';

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      // 0, 1: -100
      // 1, 1: 0
      // 2, 1: 100
      // 3, 1: 200

      // 0, 2: -200
      // 1, 2: -100
      // 2, 2: 0
      // 3, 2: 100

      // 0, 3: -300
      // 1, 3: -200
      // 2, 3: -100
      // 3, 3: 0

      // 0, 0: 0
      // 1, 0: 100
      // 2, 0: 200
      // 3, 0: 300
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const createDots = function () {
    slides.forEach((d, i) =>
      containerDots.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide=${i}></button>`
      )
    );
  };

  const activateDots = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(d => d.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide = "${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const nextSlide = function () {
    if (currSlide === maxSlide) currSlide = 0;
    else currSlide++;

    goToSlide(currSlide);
    activateDots(currSlide);
  };
  const prevSlide = function () {
    // 0, 3: -300
    // 1, 3: -200
    // 2, 3: -100
    // 3, 3: 0

    // 0, 2: -200
    // 1, 2: -100
    // 2, 2: 0
    // 3, 2: 100

    // 0, 1: -100
    // 1, 1: -0
    // 2, 1: 100
    // 3, 1: 200

    // 0, 0: 0
    // 1, 0: 100
    // 2, 0: 200
    // 3, 0: 300
    if (currSlide === 0) currSlide = maxSlide;
    else currSlide--;

    goToSlide(currSlide);
    activateDots(currSlide);
  };

  const init = function () {
    createDots();
    goToSlide(0);
    activateDots(0);
  };
  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  });
  // CREATING DOTS

  containerDots.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDots(slide);
    }
  });
};
sliderSection();

/////////////////////////////////////////////////////////////////////////
// The DOM (Document Object Model) is an interface that represents how your HTML and XML documents are read by the browser. It allows a language (JavaScript) to manipulate, structure, and style your website

// I] SELECTING ELEMENTS

// console.log(document);
// console.log(window);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const nodeList = document.querySelectorAll('.btn');
// console.log(nodeList);
// // NodeList: If DOM changes it doesn't update itself
// // For eg: If we delete any element from the DOM it will not update the nodeList because that element existed before the DOM changes

// const HTMLCollection = document.getElementsByTagName('button');
// console.log(HTMLCollection);
// // HTMLCollection is a so called "life collection" which means that if DOM changes then this also automatically udpates itself

// const HTMLCollection2 = document.getElementsByClassName('btn');
// console.log(HTMLCollection2);

// II] CREATING, INSERTING & MOVING ELEMENTS

// const header = document.querySelector('.header');
// const message = document.createElement('div');

// message.classList.add('cookie-message');
// message.innerHTML = `We use cookies for better functionality and analytics <button class="btn btn---close-cookie">Got it!</button>`;

// a. insertAdjacentElement or insertAdjacentHTML

// header.insertAdjacentText('beforebegin', 's');
// header.insertAdjacentElement('afterbegin', message);
// header.insertAdjacentElement('afterend', message);

// header.insertAdjacentElement('beforebegin', message);
// header.insertAdjacentElement('beforeend', message);

// header.insertAdjacentHTML('afterbegin', html); // 2nd argument should contain only HTML code

// b. prepend() & append()

// header.prepend(message); // To insert as the first child of the element
// header.append(message); // To insert as the last child of the element

// Since "message" is now a live DOM element it can't be at more than one place
// To insert 1 element to different places we can make copies of that element and make that element available at different places
// Here the 1st element was prepended then after the append is applied it basically moved the element from being first child to the last child
// This means that not only we can use prepend() and append() to insert elements but also to move elements
// Because DOM element is unique and can exist at only one place at a time

// To insert multiple copy of the same element
// header.append(message.cloneNode(true));
// We can simply make a clone of that element and insert that at different places

// // c. before() & after()

// header.before(message); // To insert before the element as a sibling
// header.after(message); // To insert after the element as a sibling

// III] DELETING ELEMENTS

// a. remove()
// document
//   .querySelector('.btn---close-cookie')
//   .addEventListener('click', () => message.remove());

// b. before remove() method was introduced
// document
//   .querySelector('.btn---close-cookie')
//   .addEventListener('click', () => message.parentElement.removeChild(message));

// This way of moving up and down in the DOM Tree like selecting the parent element is known as DOM traversing

///////////////////////////////////////////////////////////////////////////

// STYLES, ATTRIBUTES & CLASSES
// 37383d

// 1. STYLES
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// When we set these properties it is set as "inline-css"

// By using style we can only access the property we had set manually
// console.log(message.style.backgroundColor);
// console.log(message.style.width);

// If we try access properties which we don't set manually through style instead it is saved in class then we can't access them using style
// console.log(message.style.color);

// But there's a way to access properties in class
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// CUSTOM PROPERTY(CSSS VARIABLES)
// document.documentElement.style.setProperty('--color-primary', 'red');

// 2. ATTRIBUTES
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.id);
// console.log(logo.className);

// If we set attributes that are not standard then the js will not show that when we request the created attribute
// This is not a standard property that is expected on images
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));

// console.log(logo.setAttribute('isHuman', '100%'));

// DIFFERENCE BETWEEN ABSOLUTE AND RELATIVE SRC
// console.log(logo.src); // ABSOLUTE image
// console.log(logo.getAttribute('src')); // RELATIVE image

// ABSOLUTE image:
// http://127.0.0.1:8080/13-Advanced-DOM-Bankist/starter/img/logo.png
// The above link is absolute link

// RELATIVE image:
// img/logo.png
// The above link is relative to the file

// That's why they both are different

// DATA ATTRIBUTES
// console.log(logo.dataset.versionNumber);
// We use this a lot especially when we need to store data in user interface

// 3. CLASSES

// IGNORE ME
// const newEl = document.createElement('div');
// newEl.innerHTML =
//   'My name is Adnan <button class = "btn btn--close-cookie">Got it!</button>';
// newEl.classList.add('cookie-message');

// header.after(newEl);

// 1. classList.add()
// newEl.classList.add('bg-red');

// 2. classList.remove()
// newEl.classList.remove('bg-red');

// 3. classList.toggle()
// newEl.classList.toggle('bg-red');

// 4. classList.contains()
// console.log(newEl.classList.contains('bg-red'));

//////////////////////////////////////////////////////////////////////////
// 1. What is EVENT?
// Event is basically a signal generated by certain dumb node
// A signal means that somethings has happenned
// For example: mouse moving, click somewhere, user triggering, full screen mode and anything imp that happens on webpage generates an event
// As we know, we can then list and fold these events in our code using eventlistners
// So that we can handle

const h1 = document.querySelector('h1');

// 2. Event Names
// mouseenter event is similar to hover in css
// So it fires whenever a mouse enter certain elements
// h1.addEventListener('mouseenter', () => alert(`You're reading header`));

// 3. Types of Event Handlers
// 1. // h1.addEventListener('mouseenter', () => alert(`You're reading header`));
// 2. // h1.onclick = () => alert(`You're reading header`);

// 4. On event property (NOT recommended)
// It is not recommended to use such properties because if one wanna apply more than 1 events for that element then the latest eventhandler will cancel the previous one (and that's not the case with addEventListener())
// h1.onclick = () => alert(`You're reading header`);
// h1.onmouseenter = () => alert(`You're reading header`);

// 5. Using addEventListener we can add more than 1 event
// h1.addEventListener('click', () => {
//   console.log('Hello');
// });
// h1.addEventListener('mouseenter', () => {
//   console.log('By');
// });

// 6. REMOVING event handler function
// To do it the 2nd argument which function shouldn't be written inside the eventhandler function
// const greetHello = () => {
//   console.log('Hello');
//   h1.removeEventListener('click', greetHello);
// };
// h1.addEventListener('click', greetHello);
// document
//   .querySelector('.form')
//   .addEventListener('click', e =>
//     console.log('form', e.target.tagName, e.currentTarget.tagName)
//   );
// document
//   .querySelector('.div')
//   .addEventListener('click', e =>
//     console.log('div', e.target.tagName, e.currentTarget.tagName)
//   );
// document
//   .querySelector('.p')
//   .addEventListener('click', e =>
//     console.log('p', e.target.tagName, e.currentTarget.tagName)
//   );

// CAPTURING, TARGET & BUBBLING PHASE

const footer = document.querySelector('.footer');
// 1. CAPTURING PHASE

// footer.insertAdjacentHTML(
//   'afterend',
//   `<form class="form">
//       FORM
//       <div class="div">
//         DIV
//         <p class="p">
//           P
//         </p>
//       </div>
//     </form>`
// );
// for (let el of document.querySelectorAll('*')) {
//   el.addEventListener('click', e => alert(`Capturing: ${el.tagName}`), true);
//   el.addEventListener('click', e => alert(`Bubbling, ${el.tagName}`));
// }
// or, just "true" is an alias to {capture: true}
// document.querySelector('.form').addEventListener(..., true)

// 2. TARGET PHASE
// I] A handler on a parent element can always get the details about where it actually happened (in this case .form).

// INSERTING HTML FOR SEEING EVENT PROPAGATION IN PRACTICE
// footer.insertAdjacentHTML(
//   'afterend',
//   `<form onclick = "alert('form')" class="form">
//   FORM
//   <div class="div">
//   DIV
//   <p class="p">
//   P
//   </p>
//   </div>
//   </form>`
// );

// a. this (=event.currentTarget) is the <form> element, because the handler runs on it.
// b. event.target is the actual element inside the form that was clicked.
// document.querySelector('.form').onclick = function (e) {
//   console.log('this = ', this.tagName, 'target = ', e.target.tagName);
// };

// II] DELETING EVENT PROPAGATION
// footer.insertAdjacentHTML(
//   'afterend',
//   `<form onclick = "alert('form')" class="form">
//       FORM
//       <div onclick = "alert('div')" class="div">
//         DIV
//         <p class="p" onclick = "alert('p')">
//           P
//         </p>
//       </div>
//     </form>`
// );

// 1. e.stopPropagation()
// - event.stopPropagation() stops the move upwards, but on the current element all other handlers will run.
// document.querySelector('.p').addEventListener('click', function (e) {
//   e.stopPropagation();
// });
// document.querySelector('.p').addEventListener('click', function (e) {
//   alert('p2');
// });

// 2. e.stopImmediatePropagation()
// - To stop the bubbling and prevent handlers on the current element from running, there’s a method event.stopImmediatePropagation().
// document.querySelector('.p').addEventListener('click', function (e) {
//   e.stopImmediatePropagation();
// });
// document.querySelector('.p').addEventListener('click', function (e) {
//   alert('p2');
// });

// 3. BUBBLING PHASE
// footer.insertAdjacentHTML(
//   'afterend',
//   `<form onclick = "alert('form')" class="form">
//     FORM
//     <div onclick = "alert('div')" class="div">
//       DIV
//       <p class="p" onclick = "alert('p')">
//         P
//       </p>
//     </div>
//   </form>`
// );

//////////////////////////////////////////////////////////////////////////
// EVENT PROPAGATION: IN PRACTICE

// const links = document.querySelector('.nav__link');
// const navLinks = document.querySelector('.nav__links');
// const nav = document.querySelector('.nav');

// const genRandClr = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${genRandClr(0, 255)}, ${genRandClr(0, 255)}, ${genRandClr(0, 255)})`;

// 1. BUBBLING PHASE
// links.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`Target = ${e.target.tagName}, Current Target = ${this.tagName}`);
// });
// navLinks.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`Target = ${e.target.tagName}, Current Target = ${this.tagName}`);
// });
// nav.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`Target = ${e.target.tagName}, Current Target = ${this.tagName}`);
// });

// 2. CAPTURING PHASE
// links.addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(
//       `Target = ${e.target.tagName}, Current Target = ${this.tagName}`
//     );
//   },
//   true
// );
// navLinks.addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(
//       `Target = ${e.target.tagName}, Current Target = ${this.tagName}`
//     );
//   },
//   true
// );
// nav.addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(
//       `Target = ${e.target.tagName}, Current Target = ${this.tagName}`
//     );
//   },
//   true
// );

// 3. STOP

// a. e.stopPropagation()
// links.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`Target = ${e.target.tagName}, Current Target = ${this.tagName}`);
//   e.stopPropagation();
// });
// links.addEventListener('click', function (e) {
//   this.textContent = `Features ${genRandClr(1, 10)}`;
//   console.log(`Target = ${e.target.tagName}, Current Target = ${this.tagName}`);
// });
// navLinks.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`Target = ${e.target.tagName}, Current Target = ${this.tagName}`);
// });
// nav.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`Target = ${e.target.tagName}, Current Target = ${this.tagName}`);
// });

// b. e.stopImmediatePropagation()
// links.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`Target = ${e.target.tagName}, Current Target = ${this.tagName}`);
//   e.stopImmediatePropagation();
// });
// links.addEventListener('click', function (e) {
//   this.textContent = `Features ${genRandClr(1, 10)}`;
//   console.log(`Target = ${e.target.tagName}, Current Target = ${this.tagName}`);
// });
// navLinks.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`Target = ${e.target.tagName}, Current Target = ${this.tagName}`);
// });
// nav.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`Target = ${e.target.tagName}, Current Target = ${this.tagName}`);
// });

//////////////////////////////////////////////////////////////////////////
// DOM TRAVERSING

// GOING DOWNWARDS: child
const h1Elem = document.querySelector('h1');
// It finds the element with the particular class or just element name no matter how deeply it is nested
// console.log(h1Elem.querySelectorAll('.highlight'));
// (.querySelector() is available in both 'element' and 'document' object)

// console.log(h1Elem.childNodes);
// console.log(h1Elem.children); // => HTMLCOLLECTION

// console.log(h1Elem.firstElementChild);
// console.log(h1Elem.lastElementChild);

// GOING UPWARDS: parent
// console.log(h1Elem.parentNode);
// console.log(h1Elem.parentElement);

// console.log(h1Elem.closest('.header'));
// console.log(h1Elem.closest('h1'));
// To find the parent element with '.header' class

// GOING SIDEWAYS: siblings
// console.log(h1Elem.previousElementSibling);
// console.log(h1Elem.nextElementSibling);

// If we need all siblings and not just previous and next then we can make use of EVENT TRAVERSING
// console.log(h1Elem.parentElement.children);
// [...h1Elem.parentElement.children].forEach(el => {
//   if (el !== h1Elem) el.style.transform = 'scale(0.5)';
// });

///////////////////////////////////////////////////////////////////////////
// INTERSECTION API

// This API allows our code to observe changes to the way that a certain target element intersects other element or the way it intersects viewport
// This is more efficient because we only get this kin of event in the situation that we're actually interested in. So in this case thats the threshold 10% or 0.1
/* 
// Entries: An array of threshold (only 1 in this case)
// Observer: The observer object
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};
// The callback function will be called when the target element(section1) intersects the root element(null = viewport) at the defined threshold(0.1)

const obsOptions = {
  root: null, // The el that the target el is intersecting
  threshold: 0.1, // The % at which the target el intersects the root el
  // It is the % at which the obsCallback functino will be called
  // It is basically the percentage that we wanna have visible in our root
};
// root is the elem

// Callback function, Options object
const observer = new IntersectionObserver(obsCallback, obsOptions);

// .observe: The target element
observer.observe(section1);

// ABOUT THRESHOLD
// Eg: threshold: [0, 0.2]
// Here 0% means that the target either enters the root or move out of the root
// 0.2 is visible target
 */

//

// What is DOM Lifecycle?
// Different events that occur in the DOM during a webpage's life cycle. Life cycle means right from the moment that the page is first accessed until the user leaves it

// First Event: DOM CONTENT LOADED
// This event is first by the document as soon as the HTML is completely parsed which means that the HTML is downloaded and been converted to the DOM tree
// All the scripts must be downloaded and executed before the DOM content loaded event can happen
// DOMContentLoaded event does actually not wait for images and other external resources  to load so just HTML and js needs to be loaded

document.querySelector('DOMContentLoad', function (e) {
  console.log('HTML loaded and DOM tree built', e);
});

// With this event we can execute the code which should be only be executes after the DOM is available and infact we want to execute all our code when the DOM is ready

// So should we wrap our entire code in the eventListener with event "DOMContentLoaded"?
// NO
// and thats because we've script tag which imports js into Html at the end of the body
// so basically its the last thing that is going to read in the HTML. and so basically the browser will find our script when the rest of the HTML is already parsed anyway>

// so when we've script tag at the end of the HTML then we do not need to listen to "Dom content loaded" event
// now there are also other ways of loading js file with script tag

// DOMContentLoaded in Vanilla js Vs.JQuery
// document.addEventListener('DOMContentLoaded', function (e) {} = document.readyState
// In Jquery
// In jquery one have probably wrap the entire code in the document.ready when the entire code is ready

// LOAD EVENT
// 'load' event is fired by the window as soon as not only the HTML is parsed, but also all the images and external resources like CSS files are also loaded. So basically when the complete page is finished loading is when this event is get fired.

window.addEventListener('load', function (e) {
  console.log('Page completely loaded', e);
});

// UNLOAD EVENT
// 'beforeunload' event is fired by the window. It is executed when the user tries to quit the browser. So we can basically use this event and ask the users if they are 100% sure that they wanna leave the page or to continue!

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();

  console.log(e);
  e.returnValue = '';
});
