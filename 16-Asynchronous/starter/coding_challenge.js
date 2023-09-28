'use-strict';
///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.


PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/*
const btnCoords2 = document.querySelector('.reverse-geo');

const whereAmI2 = function (lat, lng) {
  let country;

  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
  )
    .then(response => {
      if (!response.ok) throw new Error('Put proper co-ordinates');
      return response.json();
    })
    .then(data => {
      if (!data.address.country || !data.address.city)
        throw new Error('No such country exists');

      country = data.address.country;
      return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then(response => response.json())
    .then(data => {
      const dataCountry = data.find(d => d.name.common === country);
      renderCountry(dataCountry);
    })
    .catch(err => console.error(err))
    .finally(() => (countriesContainer.style.opacity = '1'));
};

// whereAmI(23.0416079, 27.1729791);
// whereAmI(52.508, 13.381);

btnCoords2.addEventListener('click', e => {
  e.preventDefault();

  whereAmI2(52.508, 13.381);
  whereAmI2(19.037, 72.873);
  whereAmI2(-33.933, 18.474);

  form.style.opacity = 0;
});
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.
*/

//

/*

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*

const containerImages = document.querySelector('.images');
let currentImg;

const createImg = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      containerImages.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => reject(new Error('No Image found')));
  });
};

const wait2 = function (seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, seconds * 1000);
  });
};

createImg('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    return wait2(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImg('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    return wait2(2);
  })
  .then(() => (currentImg.style.display = 'none'))
  .catch(err => console.error(err));

*/

// Promise is the placeholder for the future result of the asynchronous operation
// When js sees promise it takes it and put it in the background (Web APIs Environment)

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// const countriesContainer2 = document.querySelector('.countries');

// const createImage = function (imgPath) {
//   return new Promise((resolve, reject) => {
//     if (imgPath) {
//       const img = document.createElement('img');
//       img.src = imgPath;
//       // countriesContainer2.append(img);
//       img.addEventListener('load', () => {
//         img.classList.add('images');
//         countriesContainer2.insertAdjacentElement('beforeend', img);
//         resolve(img);
//       });
//     }
//   });
// };

// const images = document.querySelector('.images');
// const wait2 = function (seconds) {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// let image;
// // createImage('img/img-1.jpg')
// createImage('img/img-1.jpg')
//   .then(img => {
//     // if (!img) throw new Error('No such image found');
//     image = img;
//     images.append(img);

//     wait2(2).then(() => {
//       image.style.display = 'none';
//       image.src = image.getAttribute('src').replace('1', '2');
//       console.log(image);
//       return image;
//     });
//   })
//   .then(img => {
//     image.addEventListener('load', () => {
//       images.append(image);
//       image.style.display = 'flex';

//       wait2(2).then(() => {
//         image.style.display = 'none';
//       });
//     });
//   })
//   .catch(err => console.error(err))
//   .finally(() => (document.querySelector('.countries').style.opacity = '1'));

///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.
*/

const images = document.querySelector('.images');
const createImg = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    const images = document.querySelector('.images');
    img.src = imgPath;

    img.addEventListener('load', () => {
      images.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => new Error('No image found'));
  });
};

const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

const loadNPause = async function (imgPath) {
  try {
    let img = await createImg('img/img-1.jpg');
    images.append(img);
    await wait(2);

    img.style.display = 'none';

    img = await createImg('img/img-2.jpg');
    images.append(img);
    img.style.display = 'flex';

    await wait(2);

    img.style.display = 'none';
  } catch (err) {
    console.error('No image found');
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  const imgs = imgArr.map(img => createImg(img));
  console.log(imgs);
  const imgEl = await Promise.all(imgs);
  imgEl.forEach(img => img.classList.add('parallel'));
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

/*
PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

// laodAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
