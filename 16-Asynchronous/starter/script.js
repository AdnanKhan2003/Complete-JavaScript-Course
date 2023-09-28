'use strict';

const btnMyCountry = document.querySelector('.my-country');
const btnCoords = document.querySelector('.reverse-geo');
const btnBack = document.querySelector('.btn-back');
const form = document.querySelector('.form-info');
const inputCountry = document.querySelector('.country-name');
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
let counter = 0;

const renderCountry = function (data, className = '') {
  // Variables
  const currencyName = Object.keys(data.currencies);
  const countryCurrency = data.currencies[currencyName].name;
  const countryLanguage = Object.values(data.languages).join(', ');
  let countryPopulation;

  // Population Logic
  if (data.population >= 1000000) {
    countryPopulation = `${(data.population / 1000000).toFixed(1)} M`;
  } else {
    countryPopulation = data.population;
  }

  // RENDER element in DOM
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${countryPopulation}</p>
                <p class="country__row"><span>🗣️</span>${countryLanguage}</p>
                <p class="country__row"><span>💰</span>${countryCurrency}</p>
            </div>
        </article> 
      `;

  // DISPLAYING Elements
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = '1';
};

const renderError = function (msg) {
  counter++;

  if (counter === 1) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.insertAdjacentText('beforeend', msg);
  }
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////////////////////////////////////////

/*
ASYNCHRONOUS JAVASCRIPT: AJAX AND API'S
- Some of the most popular use of asynchronous javascript which is basically to make so called Ajax calls to API's

SYNCHRONOUS CODE
- MOST code is SYNCHRONOUS
- Synchronous code is executed LINE BY LINE
- EACH line of code WAITS for PREVIOUS line to finish
- LONG-RUNNING operations BLOCK code execution

THREAD OF EXECUTION
- Part of execution context that actually executes the code in computer's CPU

eg: CODE:
const p = document.querySelector('.p');
p.textContent = 'My name is Adnan';
alert('Text Set!'); // => it is LONG RUNNING TASKS which blocks code execution
p.style.color = 'red';
*/

///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// MAKING OUR 1ST AJAX CALL

/*
There are multiple ways of making AJAX calls but first we'll start with the most old-school way and that is
// 1. XMLHttpRequest
// 2. Promises
// WE need URL to which we'll make AJAX call
// By doing const obj = new XMLHttpRequest() we created an object
// Which has method called 'open' which accepts 2 arguments
// open('Type of request (GET/POST)', 'String to which AJAX call should be made')
// The type of http request to get data is data
// String to which AJAX call should be made
// Search PUBLIC API on google and then go to github and there you will see a table of PUBLIc APIs in which we must check the 3 columns:
// 1. Authentication (Auth): It exists so that to see that if API need authentication or NOT(basically it SHOULD NOT need authentication)
// 2. HTTPS: It means that it uses HTTPS
// 3. Cross Origin Resource sharing (CORS): Without this we can't access 3rd party API(The CORS must be ALWAYS set to  YES or Unknown for the public APIs that we need to use)
// API Endpoints: It is just essentially an another name for the URL that we need
*/

// STEPS to make AJAX Calls:

// // 1. Call the 'XMLHttpRequest()' with 'new' operator
// const request = new XMLHttpRequest();

// // 2. Call the '.open()' method on 'XMLHttpRequest()' object and it receives 2 arguments (.open('Type of request', 'URL to which AJAX call should be made'))
// request.open('GET', 'https://restcountries.com/v3.1/name/india');

// // 3. Call 'send' method to send the request
// request.send();

// // NOTE: 'responseText' contains the response of the API
// // - so the AJAX call that we just send here is being done in the background while the rest of the code keeps running. And so this is the asynchronous non-blocking behaviour

// // (But this will not give us the 'responseText' from API it is not arrived yet)
// // console.log(request.responseText); // ERROR

// // - To solve the ABOVE problem we register a 'callback' function to the 'request' object at the load event.
// // - So here we send request (request.send()) which then fetches the data in the background, once that is done it will emit the load event and using 'addEventListener' we are waiting for the 'load' event so as soon as the data arrrives the 'callback' function will be called

// // NOTE: The response is stored in the 'responseText' property only when the data arrives which is at 'load' event

// // 4. LISTEN to 'load' event when the DATA in 'responseText' arrives
// request.addEventListener('load', function () {
//   const data = JSON.parse(this.responseText)[0];

//   console.log(data);

//   const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               data.population / 1000000
//             ).toFixed(1)} M</p>
//             <p class="country__row"><span>🗣️</span>${data.languages.hin}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies.INR.name
//             }</p>
//         </div>
//     </article>
//   `;

//   console.log(html);
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = '1';
// });

// CODE WITHOUT COMMENTS

/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  // 1. Making GET request and AJAX call to the URL of the API
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  // 2. Sending REQUEST
  request.send();

  // 3. LISTENING to 'load' event as 'responseText' property is set when the data arrives and when data arrives it emits 'load' event
  request.addEventListener('load', function () {
    // 4. PARSING 'responseText'
    const [data] = JSON.parse(this.responseText);
    console.log(`https://restcountries.com/v3.1/name/${country}`);

    // 5. DATA VARIABLES
    let countryPopulation;

    // 5a. LOGIC for 'countryPopulation' variable
    if (data.population >= 1000000) {
      // Dividing the POPULATION by 10,00,000 if population >= 10,00,000
      countryPopulation = `${(data.population / 1000000).toFixed(1)} M`;
    } else {
      // Displaying Population as it is if population < 10,00,000
      countryPopulation = data.population;
    }

    // 5b. Other Data
    const currencyName = Object.keys(data.currencies);
    const countryCurrency = data.currencies[currencyName].name;
    const countryLanguage = Object.values(data.languages).join(', ');

    // Creating DOM elements using the above DATA
    const html = `
        <article class="country">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${countryPopulation}</p>
                <p class="country__row"><span>🗣️</span>${countryLanguage}</p>
                <p class="country__row"><span>💰</span>${countryCurrency}</p>
            </div>
        </article> 
      `;

    // DISPLAYING Elements
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = '1';
  });
};

// We are calling each function we will have mutltiple AJAX calls happening at the same time (parallely)
// Whenever we reload the page multiple times, they(country) might appear in differeent order because data arrives at slightly different time each time we reload the page
// This shows the non-blocking asynchronous behaviour

// When we call 'getCountryData' with 'afghanistan' for the first time it sends this request and then js moves to next line code right away and this ofcourse fires another AJAX call immediately way before the data of afghanishtan actually arrive
// So we will have 2 AJAX call happening at same tiem and whichever comes first will fire the load event first
getCountryData('india');
getCountryData('qatar');
getCountryData('vatican city');

*/
// If we want this req to be made in a specific order like predefined order then we would have to chain the request which means to make the second request only after the first request as finished

//////////////////////////////////////////////////////////////////////////
/*
HOW THE WEB WORKS: REQUESTS AND RESPONSES

KEKYPOINTS:
I] WHAT HAPPENS WHEN WE ACCESS A WEB SERVER
  A) REQUEST & RESPONSE (response => which may contain webpage or some data)
  B) Process name

II] URL (UNIFORM RESOURCE LOCATER)
  1] HTTP/HTTPS
  1] DOMAIN NAME
  3] RESOURCE

I] DNS (DOMAIN NAME SERVER)
  A) WHAT IS ACTUALLY DOMAIN NAME
  B) CONVERSION OF DOMAIN NAME TO REAL IP ADDRESS
  C) HOW CONVERSION OF DOMAIN NAME TO REAL IP ADDRESS HAPPENS
  D) REAL IP ADDRESS
    DA) HTTP/HTTPS
    DB) IP ADDRESS
    DC) PORT NUMBER

II] TCP/IP (TRANSMISSION CONTROL PROTOCOL/ INTERNET PROTOCOL) SOCKET CONNECTION
  A) WHY WE NEED TCP/IP
  B) WHAT IS NEED TCP/IP

III] HTTP REQUEST
  A) WHAT IS HTTP REQUEST
  B) ITS FUNCTION
  C) COMMUNICATION PROTOCOL
  D) WHAT HTTP REQUEST LOOKS LIKE
    DA) BEGINNING
      - TYPE OF HTTP REQUEST
      - RESOURCE/TARGET
      - 
    DB) HEADER
    DC) BODY

* What happens when we access a web server
- Whenever we try to access web server, the browser (i.e. client) sends request to the web server  then the web server sends back response to the client and that response may contain some data or even a webpage that client requested
- This process works exactly the same no matter if we are accessing a web page or some data from Web API
- This whole process is called as 'Request Response Model' or 'Client Server Architecture'

* URL (Uniform resource Locater)
1] http/https:
- Every URL gets "http/https" ( Hypertext Transfer Protocol / Hypertext Transfer Protocol Secure) is for the protocol that will be used in this connection
- https://restcountries.com/v3.1/name/${country}
2] Domain name: (restcountries.com in this case)
- This domain name is not the real address of the server that we wanna access. Its just a simple name for us to remember.
3] Resource: (/v3.1/name/${country} in this case)
-  Resource that we wanna access

I] Domain Name Server (DNS):
a. What is DNS?
- restcountries.com is not the real address of the server that we're trying to access. DNS is a means that converts the domain name to the real address of the server which is the IP Address.
- DNS are a special kind of server so they are basically like a PHONEBOOK of the internet.
b. CONVERSION

- Domain is not the real address, the DNS will convert the domain to the real IP address. And then after the real IP address has been sent back to the browser, we can finally call it.
- We need a way of converting the 'domain name' to the 'real address' of the SERVER and that happens through DNS (Domain Name Server).
c. PROCESS of conversion
- The first step that happens when we access any web server is that the browser makes a REQUEST to a DNS (Domain Name Server) and this special server wiill simply match the web address of the server to the real IP address. And this happens throught ISP (internet SErvice Provider).
a) Domain is not the real address
b) DNS will convert the domain to the real IP address
c) And then after the real IP address is sent back to the browser then we can call it
d. REAL IP ADDRESS
This is how real IP address looks like:
- https://restcountries.com/v3.1/name/${country}
https://104.27.142.889:443 (REAL)
A) https => Protocol
.0
B) IP Address => 104.27.142.889:443 
C ) Port Number => is to identify specific service that running on the server it is like a sub-address. This port number has nothing to do resource that we wanna access. So that resource will actuablly be sent over in the http request

II] TCP/IP (Transmission Control Protocol/ Internet Protocol):
Once we have a real IP Address the TCP/IP (Transmission Control Protocol/ Internet Protocol)  socket connection is established between the client and the server and this connection is kept alive the entrie time that it takes to transfer all files of the website or data

a) What is TCP/IP
TCP/IP (Transmission Control Protocol/ Internet Protocol): They are commmunication protocol that defined exactly how data travels accross the web. They are basically the internet's fundamental control system because they are the one who set the rules about how data moves on the internet


III] HTTP REQUEST
- The request that we make is http request
a. Communication Protocol: It is a system of rules that allows two or more parties to communicate
b. What is HTTP Request
After TCP/IP the http is another communication protocol
c. Function:
IN case of http it is just a protocol that allows the client and web server to communicate and that works by sending requests and response from client to server and back
d. How REQUEST MESSAGE LOOKS:
___________________________________
GET /v3.1/name/${country} HTTP/1.1

Host: www.google.com
User-Agent: Mozilla/5.0
Accept-Language: en-US

<BODY>
___________________________________

e. REQUEST MESSAGE CONSISTS OF:
A) BEGINNING of the http request
  i) HTTP method + request target + HTTP version
B) Http request header
  i) MANY different possiblities
C) Http request body
  i) ONLY when SENDING data to server, e.g. POSTs

1] BEGINNING of the http request contains
A] TYPE of http Request
There are many types of http request BUT most POPULAR ones are:
1. GET => Requesting DAta
2. POST => Sending Data
3. PUT => Update Data
4. DELETE => Delete Data

B] Request TARGET
- This is where the server is told that we want to access the given resource (/v3.1/name/${country} in this case)
- We had this in the url before and now it is simply sent as the target in the http request and then the server can figure out what to do with it
- But now if the target was empty i.e. just a '/' basically then we would be accessing the website's root which is just restcountries.com in this example

C] HTTP Version 
HTTP/1.1 in this example


2] Http request header (Many different possibilities)
- It is just some information that we sent about the request itself
- There are tons of standard different headers like what browser is used to make request, at what time, the user's language

3] Request BODY
- And that body will contain the data that were sending for example coming from html form
- So that is the http request

DIFFERENCE between HTTP & HTTPS
- The main difference between http and https is that https is encrypted using TLS or SSL which are yet some protocols

1V] HTTP RESPONSE:
OUR REQUEST IS FORMED AND NOW ITS HITS THE SERVER WHICH WILL THEN BE WORKING ON IT UNTIL IT HAS THE DATA OR WEBPAGE READY TO SEND BACK
AND ONCE IT IS READY IT WILL SEND IT BACK USING 'HTTP RESPONSE'

- HTTPS RESPONSE EXAMPLE
_____________________________________________
HTTP/1.1 200 OK

Date: Fri, 16 Jan 2023
Content-Type: text/html
Transfer-Encoding: checked

<BODY>
_____________________________________________

A) HTTPS RESPONSE
Https response looks quite similar to the request which consists
A) Start Line: 
  i) HTTP version + status code + status message
B) Header
  i) MANY different possiblities
C) Body
  i) MOST responses

Now in it this case start line has version, status code and message
- To let the client know whether the request has been successfull or fail (for eg: 200 is ok, 404 means page not found) 
- And this is where 404 comes from

B) RESPONSE HEADER
REsponse header are info about response itself there are ton available and we can make our own

C) RESPONSE BODY
Present in most response
Contains JSON data coming back from API
Contains HTML of the webpage that we requested

NOTE: 
- In our example we only did 1 request and only got 1 response back and thats how it is gonna work when all we do is access an API
- However if it is a webpage that we are accessing then there will be many more request and responses and thats because when we first request all we get back is just the initial HTML file then the HTML file will be scanned by the browser for all the assets that it needs in order to build the entire webpage like Javascript, css files, img files or other assets
and for each different files there will be a new http request made to the server
- So bascially this entire back and forth between client and server happens for every single file that is included in the webpage
- However there can be multiple request and response happening at same time but the amount is still limited otherwise the connection would start to slow down
- When all the files are finally arrived then the webpage can be rendered in the browser according to HTML, css and javascript specification


TCP/Ip
How does the request and response data is actually send accross the web

TCP/IP are the communication protocol that decide how the data travels accross the web
- The job of TCP/IP is to break the request and response to break down into thousands of small chunks called packets before they are sent
- Once the small packets arrived at their final destination TCP will reassmemble all the packets into the original request or response and this is necessary so that each packaage can take different path throught the internet because this way the message arrives at destination as quick as possible which would not be possible if we send the entire data as a big chunk. This would be like trying to go through dense traffic with biggest bus so not a good idea
Second part the job of IP protocol to send and route this packets throught the internet
It ensures that they arrive at the destination they should go using IP address on each packet

QUICK SUMMARY: What happens when we access a web server?
When accessing a web server, the following steps take place:

1. The browser follows a client-server architecture known as the Request-Response Cycle.
2. The URL used consists of the protocol (HTTP or HTTPS), the domain name, and the resource.
3. DNS (Domain Name Server) converts the domain name to the server's IP address.
4. A TCP/IP socket connection is established between the client and the web server.
5. HTTP (Hypertext Transfer Protocol) is used as the communication protocol.
6. An HTTP request is sent from the client to the server, including the HTTP method, request target, headers, and optional request body.
7. The server processes the request and prepares an HTTP response, including the HTTP version, status code, headers, and optional response body.
8. The response is sent back to the client, indicating the success or failure of the request.
9. Multiple requests and responses may occur when accessing a web page, as additional assets are loaded.
10. TCP breaks down requests and responses into packets, while IP handles packet routing using IP addresses.


Difference between Domain Name SERVER & Domain Name SYSTEM

Domain Name System: 
Domain Name System is a system of domain names
- Still the DOMAIN is NOT a website, it is just a name
- To STORE a website, webhosting is required. Websites are stored on web servers and webhosting is a service that provides the space on these web servers for the website to be availabe

For example:
"udemy.com" is a DOMAIN NAME - a regiestered name where udemy is a second-level domain and .com is top-level domain

TOP-level Domain: .org, .biz, .eu, etc
- There are DIFFERENT rules related to the domain names
- Some rules are general
  For Eg: The domain name must only be 3-64 characters long
- Also, there are rules for specific 


TCP - breaks requests/responses into small chunks called packets. Than reassemble these packets once they have arrived to their location

IP - Sends/ Routes the packets through the internet using IP addresses on each packet

Communication Protocol- It the system of rules that allows two or more parties to comunicate
In case of http that allow client and server to communicate
*/

///////////////////////////////////////////////////////////////////////////// CALLBACK HELL
// Callback hell is when we have a LOT of NESTED callbacks in order to execute ASYNCHRONOUS tasks in SEQUENCE. This happens for all asynchronous tasks which are handled by callback and not just AJAX calls
// CALLBACK HELL is EASY to identify as there is 'triangular' indentation is formed
// PROBLEM:
// - It makes code MESSY & HARD to MAINTAIN
// - It makes code HARD to UNDERSTAND & REASON
//////// - and code that is hard to understand and reason about is just bad code and it may introduce more bugs and will be difficult to ADD new features and functionality to the application

// NOTE: We Can ESCAPE callback hell using 'PROMISES'

/*
const renderCountry = function (data, className = '') {
  // Variables
  const currencyName = Object.keys(data.currencies);
  const countryCurrency = data.currencies[currencyName].name;
  const countryLanguage = Object.values(data.languages).join(', ');
  let countryPopulation;

  // Population Logic
  if (data.population >= 1000000) {
    countryPopulation = `${(data.population / 1000000).toFixed(1)} M`;
  } else {
    countryPopulation = data.population;
  }

  // RENDER element in DOM
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${countryPopulation}</p>
                <p class="country__row"><span>🗣️</span>${countryLanguage}</p>
                <p class="country__row"><span>💰</span>${countryCurrency}</p>
            </div>
        </article> 
      `;

  // DISPLAYING Elements
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = '1';
};

const getCountryAndNeighbour = function (country) {
  // MAKING AJAX CALL
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    renderCountry(data);
    console.log(data);

    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    // CALLBACK HELL: EXAMPLE 1
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('india');

// CALLBACK HELL: EXAMPLE 2
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
        setTimeout(() => {
          console.log('5 second passed');
          setTimeout(() => {
            console.log('6 second passed');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

///////////////////////////////////////////////////////////////////////////// PROMISES & FETCH API

/*
The SOLUTION to "callback hell" is PROMISES
We can do it by using "FETCH API"

// OLD-SCHOOL WAY
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/${country});
request.send();

// MODERN WAY (ES6 FEATURE)
const request = fetch('https://restcountries.com/v3.1/name/${country});
console.log(request);

WHAT are PROMISES?
- An OBJECT that is used as a PLACEHOLDER for the FUTURE result of the ASYNCHRONOUS operation
- A container for an asynchronously delivered value
- A container for a future value
FUTURE value: RESPONSE from AJAX call
When we START the AJAX call there is no value yet, but we know that there will be some value in the future and we can use PROMISE to handle future value

When code execution reaches code which is asynchronous, then it puts that asynchronous task in the background (Web APIs Environment) and immediately moves to the next line. 
So if we log the result of the asynchronous task that is currently in the background waiting to be executed it will simply return "PENDING" Promise because since the code is in the background and not executed yet so thats why js don't have any way of knowing what will be the future result of that asynchronous task

ADVANTAGES of PROMISES:
- We NO longer need to RELY on 'events' and 'callbacks' passed into the asynchronous function to handle asynchronous results
- Instead of NESTING callbacks, we can CHAIN promises for a SEQUENCE of asynchronous operations: ESCAPING callback hell

The PROMISE LIFECYLCE:
Since promise work with asynchronous operations they are time sensitive so they can be in different state. So this is what we call 'PROMISE LIFECYCLE'

There can 2 STATE of PROMISES
1. PENDING: BEFORE the future value is available
2. SETTLED: Asynchronous task has finished
  a. FULFILLED: Success! The value is now AVAILABLE
  b. REJECTED: An error happened
NOTE: We can HANDLE these different states in our code

* Promises are time-sensitive. They can be in one of these two states:

a. Pending: Before the future value resulting from the Async task is available. During this time the Async task is still running in the background.
b. Settled: After the Async task has finished. This is when the future value is available. A settled promise can either be fulfilled (success! The Value is now available) or rejected (An error happened eg: No network). We are able to handle these different states in our code. The promise is only settled once.

BUILDING & CONSUMING PROMISES
- To get a result from a promise means to consume a promise.
- We consume a promise once the settled promise has arrived eg A promise returned by the fetch API.
- In order for a promise to exist in the first place, it must first be built. So it must be created in the case of the fetch API, it's the fetch function that builds the promise and returns it for us to consume.

*/

/*
As soon as we make or started the request we stored the result of that into the request object and then as we log it we immediately got the promise here
const request = fetch(`https://restcountries.com/v3.1/name/india`);
console.log(request);
*/

///////////////////////////////////////////////////////////////////////////// CONSUMING PROMISES

// const renderCountry = function (data, className = '') {
//   // Variables
//   console.log(data);
//   const currencyName = Object.keys(data.currencies);
//   const countryCurrency = data.currencies[currencyName].name;
//   const countryLanguage = Object.values(data.languages).join(', ');
//   let countryPopulation;

//   // Population Logic
//   if (data.population >= 1000000) {
//     countryPopulation = `${(data.population / 1000000).toFixed(1)} M`;
//   } else {
//     countryPopulation = data.population;
//   }

//   // RENDER element in DOM
//   const html = `
//         <article class="country ${className}">
//             <img class="country__img" src="${data.flags.png}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${countryPopulation}</p>
//                 <p class="country__row"><span>🗣️</span>${countryLanguage}</p>
//                 <p class="country__row"><span>💰</span>${countryCurrency}</p>
//             </div>
//         </article>
//       `;

//   // DISPLAYING Elements
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = '1';
// };

// CONSUMING PROMISES (With EXPLANATION)
// const getCountryData = function (country) {
//   // 1. fetch(url) => PROMISES

//   // 2. EVERY promise has 'then' method available on it
//   // It is executed when the promise is FULFILLED
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       // The first argument that the 'then' method has is the response of the 'fetch' API which is PROMISE
//       // But we CAN'T consume the promise yet as it needs to converted
//       console.log(response);

// So the solution is that we need to RETURN the RESPONSE (first argument of the 'then' method) and also call 'json' method on it as the body is LOCKED and then handle the PROMISE by calling another 'then' method
// This will return new promise
// We wrote json method to READ the data from response
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//     });
// };

// CONSUMING promise (using arrow function)

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       console.log(neighbour);
//       fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//      The promise that we will be return from this will become the fulfillment value
//      return 23;
//     })
//     .then(data => alert(data));
// };

// MULTIPLE NEIGHBOURS
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbours = data[0].borders;

//       if (!neighbours) return;

//       neighbours.forEach(neighbour => {
//         console.log(neighbour);

//         fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//           .then(response => {
//             console.log(response);
//             return response.json();
//           })
//           .then(data => renderCountry(data[0], 'neighbour'));
//       });
//     });
//   // .then(response => response.json())
//   // .then(data => renderCountry(data[0], 'neighbour'));
// };

/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      console.log(neighbour);
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'));
};

getCountryData('india');
*/

///////////////////////////////////////////////////////////////////////////// HANDLING REJECTED PROMISES/ CATCHING ERROR

/*
The only the way in which the fetch promise rejects is when the user LOSES internet connection
*/

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     // 1. When promise is REJECTED 2nd callback function of 'then' is called
//     // But if we use this then we've to add 2nd callback function for every then method that is attached to promise so the solution is to use CATCH method at the end of the chain
//     // .then(
//     //   response => response.json(),
//     // NOT EFFICIENT TO INSERT 2ND CALLBACK FUNCTION ON EACH PROMISE
//     //   err => {
//     //     alert(`Some Error happenned: ${err.name}`);
//     //     console.error(`Some Error happenned: ${err.name}`);
//     //   }
//     // )
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       console.log(neighbour);
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     // NOT EFFICIENT TO INSERT 2ND CALLBACK FUNCTION ON EACH PROMISE
//     // .then(
//     //   response => response.json(),
//     //   err => {
//     //     alert(`Some Error happenned: ${err.name}`);
//     //     console.error(`Some Error happenned: ${err.name}`);
//     //   }
//     // )
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'));
//   // .catch(err => alert(err));
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };

/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      console.log(neighbour);
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    // Errors PROPAGATE down the chain until they are either caught or uncaught
    // SOLUTION use catch(): To catch every error at the end of the promise chain or else error will be UNCAUGHT
    .catch(err => {
      console.error(err);
      renderError(`Something went wrong: ${err.name} `);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', function () {
  getCountryData('dsadfasf');
});

*/

/*
1. The 'fetch()' function makes request or AJAX call to the url returns PROMISE
2. When PROMISE is returned it is called SETTLED promise, either as FULLFILLED or REJECTED
3. If PROMISE is FULFILLED then the 'FIRST argument' of the '.then()' function is called
4. If PROMISE is REJECTED then the 'SECOND argument' of the '.then()' function is called
5. 'then()' is called when promise is FULFILLED
6. 'catch()' is called when promise is REJECTED
7. 'finally()' is called no matter either promise is FULFILLED or REJECTED

USECASE:
- For rendering a spinner(loading) until the promise which contains data or webpage is returned

=> PROBLEM with using 2nd callback function in '.then()' method
- Problem is that if we have multiple fetches then we will have multiple promise so to handle each promise we have to attach the error handler as the 2nd argument of each of those promise in the '.then()' method which is not good

=> SOLUTION:
- So the SOLUTION is "CATCH()" method at the end of the promise chain
- It CATCHES every error occured in the promise chaining and if there is no "catch" used or 2nd argument is inserted on '.then()' then the error remains UNCAUGHT

Even if there is no country as provided by user input then also the promise will still be fulfilled
with 404 the promise will still get fullfilled
*/

///////////////////////////////////////////////////////////////////////////// THROWING ERRORS MANUALLY

// Here we are
// - fetching promises by making request to the url
// - Handling error
// - Conversion to JSON
const getJson = function (url, errorMessage = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMessage} ${response.status}`);
    }
    return response.json();
  });
};

// Here we have lot of duplicate code for fetching, converting to json and error which is violating the DRY principle so we'll create a function to wrap this 3 functionalities into 1 helper function
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`No such county found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       console.log(neighbour);
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     // SOLUTION use catch(): To catch every error at the end of the chain or else error will be UNCAUGHT
//     .catch(err => {
//       console.error(err);
//       renderError(`Something went wrong ${err}`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

const getCountryData = function (country) {
  country = country.toLowerCase().trim();
  getJson(
    `https://restcountries.com/v3.1/name/${country}`,
    'NO such country found'
  )
    .then(data => {
      let countryInfo = data.find(d => d.name.common.toLowerCase() === country);
      renderCountry(countryInfo);
      const neighbour = countryInfo.borders?.[0];

      // const neighbour = data[0].borders?.[0];
      if (!neighbour) {
        // Here we're manually creating error so that we can handle it down in the catch method
        throw new Error('NO neigbours found');
      }

      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'NO country found'
      );
    })
    // .then(data => renderCountry(data[0], 'neighbour'))
    .then(data => {
      // console.log(data.borders[0]);
      renderCountry(data[0], 'neighbour');
    })
    // SOLUTION use catch(): To catch every error at the end of the chain or else error will be UNCAUGHT
    .catch(err => {
      renderError(`${err.message}`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

const startApplication = function (e) {
  e.preventDefault();
  let counter = 0;
  counter++;
  if (counter === 1) getCountryData(inputCountry.value);

  form.style.opacity = 0;
};

const init = function (e) {
  form.style.opacity = 1;
  inputCountry.value = '';
  inputCountry.blur();
  inputCountry.focus();

  document.querySelectorAll('.country').forEach(c => c.remove());
  document.querySelectorAll('.neighbour').forEach(n => n.remove());
  countriesContainer.style.opacity = 0;
};

btn.addEventListener('click', startApplication);
// getCountryData('nepal');

btnBack.addEventListener('click', init);
document.body.addEventListener('keydown', function (e) {
  const clicked = e.key;
  if (clicked === 'Escape') init();
});

init();

// BAD Practice
// To NOT handle REJECTED promises

// document.body.addEventListener('click',)

// The error can be manually created by using new Error() construcotr function and prepend 'throw' keyword before the error constructor function.
// As soon as javascript sees the throw keyword it returns from the function
// The error constructor results in rejecting the promises
// Whenever error happens it results in rejecting the promise and the error propagates down in the chain and if there is '.catch' method at the end of the chain then the error will be caught and the error message will be displayed
// Creating and throwing errors results in rejecting promise and then the error travels down until the catch method catches the error and display the error we created

// If any error happens in the 'then()' handler then that error will propagate down in the chain of promises until it is caught by the '.catch()' method which will handle the error
// And if doesn't get caught then the error wil be shown in the console as 'uncaught error'
// Note: then function always returns the promises otherwise it can't be used

////////////////////////////////////////////////////////////////////////////////////////
/*

ASYNCHRONOUS JAVASCRIPT: HOW EVENT LOOP WORKS BEHIND THE SCENES

1. Javascript Runtime:
-> It is a 'container' that contains all the pieces necessary to execute Javascript code

2. Javascript Engine:
-> It is the "heart" of the Javascript Runtime

2a. Call Stack
-> It is where code is actually executed

2b. Heap
-> Where objects are stored in memory

3. Web APIs
-> APIs are provided to the engine
   Eg: DOM, Timers, Fetch API, Geolocation API, etc

4. Callback Queue:
-> It is data structure that contains all the 'ready-to-be-executed' callback functions (coming from events)
  Eg: click, timer, data

7. Single Thread:
-> Javascript has Single thread
  It can't do multi-tasking, it can do 1 thing at a time

6. Event Loop:
-> Once the call stack is empty, the event loop takes callback function from the callback queue and puts them into call stack inorder so that they can be executed
- It is Event Loop that makes asynchronous behaviour possible in javascript
- It is the reason why we can have a "non-blocking concurrency model" in Javascript

7. Synchronous
-> The Javascript engine executes our program sequentially, one line at time from top to bottom in the exact order of the statements

8. Asynchronous
-> Javascript can start long-running tasks and continue running other tasks in parallel

9. Blocking:
-> MOST code is SYNCHRONOUS
- Synchronous code is executed LINE BY LINE
- EACH line of code WAITS for PREVIOUS line to finish
- LONG-RUNNING operations BLOCK code execution

10. Non-blocking:
-> Long-running operations doesn't block code execution
- It takes long-running tasks and put them in the 'background' and once the callstack is empty, the event loop takes those long-running tasks and put them into the call stack so that they can be executed

11. Concurrency Model
-> It is how a language handle multiple things happening at the same time

12. Non-blocking Concurrency Model
-> It is how Javascript handles multiple tasks without blocking the execution of the next line code  
- Because of event loop non-blocking concurrency model is possible in javscript

// HOW ASYNCHRONOUS JAVASCRIPT WORKS BEHING THE SCENES

Asynchronous code is executed behind the scenes using: 
1. Call Stack
2. Web API
3. Microtasks Queue
4. Callback Queue

Example: How the below code will be executed in the background
_____________________________________________
// CODE

const el = document.querySelector('img');
el.src = 'cat.jpg';
el.addEventListener('load', () => {
  el.classList.add('fadeIn');
});

fetch('https://someurl.com/api')
.then(response => console.log(response));
______________________________________________

>> EXPLANATION OF THE ABOVE CODE <<
1. Firstly, we select an image it is done in the call stack as soon as it is selected it is popped off the call stack
2. 2nd line is now executing in the call stack and we set the image source to something, this will now start to load this image in the background asynchronously and then it is popped off the call stack
What is "background"?
-> Everything related to DOM is not a part of Javascript but Web APIs 
- It is in the Web APIs environment where the tasks related to DOM will run
- The same is true for AJAX calls, timers and all other asynchronous tasks
- All these asynchronous tasks will all run in the Web APIs environment
NOTE: If the image would be loading in the synchronous way right in the call stack blocking the execution of the rest of the code and that would be terrible
- And thats why loading image in javascript is asynchronous so it doesn't happen in the call stack not in the main thread of the execution but in the Web API environment

2. Then we attached an event listener to the load event of that image and pass in a callback function
- In practice it means that we register a callback function in the WEb api environment exactly where the image is loading
- Callback will stay there until the 'load' event is emitted
- So we're handling asynchronous behaviour with a callback


- Once the load event is emiited the callback function is ready to be executed it is sent to the callback queue 
- And this is popped off the call stack

3. Here, we made an AJAX call using fetch API
- This asynchronous fetch operation will happen in the Web APIs environment. Because otherwise we would have block the call stack and create a huge lag in our application
- We use then method on the promise returned from the fetch API
- And this will also register callback in the web APIs environment so that we can react to the future resolved value of the promise
- This callback is associated with a promise that is fetching the data from the API
- So here we've executed all the top-level code that isn't inside of any callback function in a asynchronous way
- We also have image loading in the background and some data being fetch from the API
- When the image is finished loading the load event is emmitted on that image
- What happens that the callback  in this image is put in the callback queue. Callback queue is the order list of all the callback function that are in line to be executed (like a to-do list that you have to complete)
- Callback Queue
  - If there would be other callback function in the callback queue, then the callback attached to the image that completes loading at the load event will be at the end of those callback function and it is executed(actually put in the call stack) when it is first in the line
  - Lets imagine that you set a timer for 5 seconds so after 5 seconds that timers callback will be put in the callback queue. And lets say there were other callback waiting and lets also say it took 1 second to execute all those other callback. Then in this case your timer's callback will only run after 6 seconds and not 5 seconds
  6 seconds = 5 seconds for timer + 1 second to run all other callback that were only waiting in the callback queue in front of your timer.
  -It means that the timers duration that you defined is not a guarantee, the only guarantee is the timer callback will not run before 5 seconds but it might run very well after 5 seconds are passed. It depends on the state of the callback & microtask queue. 
  - The Callback queue also contains callbacks function coming from DOM events like clicks, or keypresses or whatever
  DOM events are not really asynchronous behaviour but they still use callback queue to run their attached callbacks 

What does EVENT LOOP do?
- It looks into the call stack and determines whether its empty or not except for the global execution context
- If the stack is empty, which means there is currently no code executing
- Then it will take the first calback from the callback queue and put it in the callstack to be executed and this is called as an Event loop tick
- So each time event loop takes a callback from the callback queue , we say that there was an event loop tick
- The event loop has an extremely important tasks of doing coordination between the call stack and the callbacks in the callback queue
- So the event loop is basically who decides exactly when each callback is executed, we can also say the event loop does the orchestration of the entire javascript runtime
- Javascript itself has actually no sense of time, that's because everything that is asynchronous doesn't happen in the engine, its the runtime who manages all the asynchronous behaviour and its the event loop who decides which code will be executed next
- The engine simply executes whatever code it is given

- the image started loading asynchornously in the web APIs environment and not in the call stack
- We then use addEventListener to attach a callback function to the imaage load event
- And this callback is basically our asynchronous code
- Its code that we deferred in the future because we only want to execute once the image has loaded
- In the mean time the rest of the code keep running
- Now the addEventListener did not put the callback function directly in the callback queue, it simply register the callback function, which then kept waiting in the Web APIs environment until the load event was fired off
- Only then the environment put the callback function in the callback queue
- Then while in the queue the callback kept waiting for the event loop to pick it up and put it in the call stack
- And this happen as soon as the callback function is first in the line and the call stack is empty
- All this happen so that the image did not have to load in the call stack, but in the background in a non-blocking way
- So in a nutshell, the Web APIs environment, the callback queue and the event loop all together make it possible that an asynchronous code can be executed in a non-blocking way even with only one thread of execution in the engine 

- We still have fetch function getting data from the AJAX call in the background and this is basically happening with a promise
- With promises things work in a slightly differnet way. 
- When the data is arrived and so the fetch is done, now callbacks related to promises like the then method which we registered with the promises(then method) do not actually go in the callback queue
- This callback that we still have that is coming from a promise will not be moved to a callback queue(.then())
- Infact callbacks of promises have a special queue for themselves which is called Microtasks Queue  
- What is special about Microtasks queue is that it have a priority over callback queue
- So at the end of an event loop tick, so after a callback is taken from a callback queue the event loop will check whether there are any callback in the microtasks queue
- If there are, it will run all of them before it will run any more callbacks from the regular callback queue
- We call the callbacks from the promises Microtasks and therefore the name microtasks queue
- And there are actually other microtasks

- We actually do have a microtasks in the microtasks queue and the call stack is also empty, and then therefore the event loop will then take this callback and then put it into call stack it doesn't matter if callback queue is empty or not because microtasks have priority over callback function from the callback queue
- In practice, this means that the microtasks can basically cut in line before all other regular callbacks
- If one microtask adds another microtask then that new microtask is also executed before all callbacks from the callback queue
- This measns that the microtask can essentially starve callback queue because if we keep adding more and more microtaks then the callbacks in the callback queue can never execute
  ///>>> MAYBE INTERVIEW QUESTION <<<///
- This is usually not a problem, just a possiblity
- The idea of running asynchronous code with regular callbacks and with microtasks coming with promises is very similar. The only differnce is that they go in different queues and that the event loop gives microtasks priority over regular callbacks

FINALLY,
- Empty call stack except for global execution context
*/

//////////////////////////////////////////////////////////////////////////// EVENT LOOP IN PRACTICE

/*
Promise.resolve()
=> To create promise that is immediately resolved
One that immediately has a sucessful value

>> EXPLANATION of which line of the BELOW code will be executed first:
1. Firstly, all the top-level code which is NOT inside of any 'function' or 'callback function' will be executed
(2 console.log() in this case)
2. Then the js will register the callback function of the timer in the Web APIs Environment and after 0 seconds it will put that callback function (of setTimeout) in the callback queue. 
3. Since timers works asynchronously, after registering the callback function of the setTimeout the js will go to the next line in which Promise is immediately settled in this case. And then the callback function ('then()' method) which handles the promise will be putted into the 'Microtasks queue'
4. Now the 'Callback Queue' and 'Microtasks Queue' BOTH has 1 callback function in them, but as we know Javascript gives priority to the 'Microtasks queue' and so the 'then()' callback (microtask) will be first taken by the 'Event Loop' and will be put into the call stack (the call stack is empty in this case now) 
5. Once the 'then()' is executed then only the callback function that is attached to the setTimeout waiting in the callback queue to be executed will be taken by the Event Loop and will be put into the call stack and finally it is executed

// So the ORDER of EXECUTION will be:
-- Test Start --
-- Test End --
Resolved Promise 1
I am a timer

// NOTE: Global Execution Context REMAINS in the browser until the user leaves the browser.
*/

/*
console.log('-- Test Start --');
setTimeout(() => console.log('I am a timer'), 0);
Promise.resolve('Resolved Promise 1').then(response => console.log(response)); // => To create promise that is immediately resolved
console.log('-- Test End --');

// Can the execution of microtask make the timer wait even if the time in which it has to executed has passed. Lets see (ANSWER is below of the below code)

Promise.resolve('Resolved Promise 2').then(response => {
  // We created this old-school loop to make this callback function execution time LONGER
  // for (let i = 0; i < 1000000000; i++) {} // COMMENTED: This makes this callback execution longer (It may be DANGEROUS to computer's health)

  console.log(response);
});
*/

/*
>>>>>>>>>> ANSWER <<<<<<<<<<<<<<
YES!!
If the execution of the callback function of the Promise takes long time (due to any reason) CAN make the callback function in the setTimeout function wait for longer time even if the time defined in the 2nd argument of the setTimeout has passed
- The time defined in the 2nd argument of the setTimeout, it isn't guarantee that it will run immediately after that time has passed BUT it will put into the "Callback Queue" after that time has passed. And in the callback queue it will wait until all the callbacks of the 'Microtasks Queue' has finished executing and also the callbacks in the 'Callback Queue" which is infront of our timer has finished its execution
- So we should understand 2nd argument of the setTimeout will run ATLEAST after the determined time or maybe DELAYED.

NOTE:
- And once again because here the promise is IMMEDIATELY resolved and has NOT to go through the "Web APIs Environment" so that means it is in the "MICROTASKS QUEUE" so as we know Microtasks Queue are given priority over callback queue
- You can not really do high precision things using javascript

*/
//////////////////////////////////////////////////////////////////////////
// BUILDING A SIMPLE PROMISE

/*
1. Promise is a 'CONSTRUCTOR FUNCTION' if called with new keyword will result in creating a new object. Promise is also a 'special' type of object in Javascript
2. The 1st argument of the Promise is a function which is called as "Executor function"
3. The Executor function takes 2 functions as arguments which are the RESOLVED or REJECT value of Promise
4. This will either return a fulfilled or rejected promise value
5. If the result value of the promise is fulfilled then we can consume that promise using 'then()' method
6. We can also catch error if the promise is rejected
*/

// >>>> Here we this function is not actually asynchronous
// const examResultsProbability = new Promise((resolve, reject) => {
//   if (Math.random() * 1 > 0.5) {
//     resolve('You topped the Exam!');
//   } else {
//     // Instead of just printing some string it is better to create an ACTUAL Error
//     // reject('Your score is average');
//     reject(new Error('Your score is average'));
//   }
// });

// We normally consume Promises
// We usually build Promises to wrap up old callback based functions into Promises. And this process is called as PROMISIFYING
// PROMISIFYING means to CONVERT callback based asynchronous behaviour into Promise based

/*
// Encapsulating asynchronous behaviour into promise
const examResultsProbability = new Promise((resolve, reject) => {
  console.log('Counting your result probability...');
  setTimeout(() => {
    if (Math.random() * 1 > 0.5) {
      resolve('You topped the Exam!');
    } else {
      // Instead of just printing some string it is better to create an ACTUAL Error
      // reject('Your score is average');
      reject(new Error('Your score is average'));
    }
  }, 2000);
});

examResultsProbability
  .then(res => {
    console.log(res);
    // return res;
  })
  .catch(err => console.error(err));

// This function will immediately create a new promise and after the some time defined in the 2nd argument of the setTimeout it will return the resolve value
// We here are NOT passing any reject value simply because the timer do NOT get rejected
const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

// Helps in AVOIDING Callback Hell
wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(2);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(3);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(4);
  })
  .then(() => {
    console.log('4 second passed');
  });

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
////////////////
// Promise Constructor Static Methods
// IMMEDIATELY Resolves Promises
Promise.resolve('Promise Resolved').then(response => console.log(response));

// IMMEDIATELY Rejects Promises
Promise.reject(new Error('Nothing to see here')).catch(err =>
  console.error(err)
);

// Promisfying means to convert callback based asynchronous behaviour to promise based
*/

//////////////////////////////////////////////////////////////////////////
// PROMISIFYING GEOLOCATION API

// This is a callback API
// Promisifying: converting callback based API to promise based
// The function basically offloaded its work to the background, to the Web API Environment in the browser then it immediately moved to last line
// const getMyPosition = function () {
//   navigator.geolocation.getCurrentPosition(
//     pos => console.log(pos),
//     err => console.log(err)
//   );
// };
// getMyPosition();
// console.log('-- Start --');

// const getMyPosition = function () {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(pos => resolve(pos), err => reject(err));
//   });
// };

// getCurrentPosition has 2 parameters (sucess, failure)
// So we want to pass the position object when the user accepts the location permission so whenever user allows the first callback will be called and whenever the user doesn't 2nd callback will be called

/*
const getMyPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function (e) {
  console.log(e.preventDefault);
  e.preventDefault();
  let country;
  getMyPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
      );
    })
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

// getMyPosition().then(pos => {
//   const { latitude: lat, longitude: lng } = pos.coords;
//   whereAmI(lat, lng);
//   console.log(pos);
// });
// myCountry.addEventListener('click', whereAmI);
const btnMyLocation = document.querySelector('.my-country');
btnMyLocation.addEventListener('click', whereAmI);
*/

//////////////////////////////////////////////////////////////////////////// Consuming Promises with ASYNC, AWAIT

/*
1. async:
- It makes any function asynchronous, which means that whenever the code execution reaches this line it will put this function in the background (Web APIs Environment) and once it is ready to be executed it will be put back in the call stack
- This makes functinon asynchronous, so a function that will keep running in the background while executing the code is in it and once this function is done it automatically returns a promise
- So to implement non-blocking behaviour

2. await:
- It stops the code execution until the asynchronous task to which it is assigned returns fulfilled promise
- It can only be used in 'async' function. We can use multiple 'await' in the 'async' function

SO 'await' MAKES THE CODE EXECUTION STOP UNTIL THE PROMISE IS FULFILLED VALUE, then HOW THIS IS "ASYNCHRONOUS CODE"??
- We used 'async' to make function asynchronous
- So when code execution reaches 'async' function. It takes that function in the background (Web APIs Environment) and then executes which doesn't block the call stack
- So it can't stop code execution in the call stack which is the main thread while in the background
- And that's why it is an asynchronous code

FACT about async/await:
- async/await is synthatic sugar over then method in promise (Just a layer of abstraction probably)
- Behind the scenes we are still using promise and calling then method
- We're simply using different way of consuming them
*/

/*
const formatCountrySmall = country => country.toLowerCase().trim();
const formatCountryUpper = country =>
  country.split('')[0].toUpperCase() + country.slice(1);

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  // GET user's current position
  const positionUser = await getPosition();
  const { latitude: lat, longitude: lng } = positionUser.coords;
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
  );

  const data = await res.json();

  const res2 = await fetch(
    `https://restcountries.com/v3.1/name/${formatCountrySmall(
      data.address.country
    )}`
  );
  const dataArr = await res2.json();
  const data2 = dataArr.find(d => d.name.common === data.address.country);
  renderCountry(data2);

  countriesContainer.style.opacity = 1;
};
whereAmI();
*/

//////////////////////////////////////////////////////////////////////////// ERROR HANDLING WITH TRY, CATCH

// try/catch statement: It has NOTHING to do with 'async/await' it is in javascript since the beginning
// try: It has the code in which there may be error so that it could be caught in the catch block
// catch: It has access to the errors of the 'try' block, so it basically catches error from the 'try' block

// CATCHING ERROR IN THIS NORMAL SYNTAX ERRO
// let x = 1;
// const y = 2;
// y = 3;

// Here, we CAUGHT "error" from the 'try' block into the 'catch' blcok
// try {
//   let x = 1;
//   const y = 2;
//   y = 3;
// } catch (err) {
//   console.error(err.message);
// }

/*
try {
  const formatCountrySmall = country => country.toLowerCase().trim();
  const formatCountryUpper = country =>
    country.split('')[0].toUpperCase() + country.slice(1);

  const getPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const whereAmI = async function (country) {
    // GET user's current position
    const positionUser = await getPosition();
    const { latitude: lat, longitude: lng } = positionUser.coords;
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
    );
    if (!res.ok) throw new Error('Reload Slower');

    const data = await res.json();

    const res2 = await fetch(
      `https://restcountries.com/v3.1/name/${formatCountrySmall(
        data.address.country
      )}`
    );
    if (!res2.ok) throw new Error('Reload Slower');
    const dataArr = await res2.json();
    const data2 = dataArr.find(d => d.name.common === data.address.country);
    renderCountry(data2);
    form.style.opacity = 0;
    countriesContainer.style.opacity = 1;
  };
  whereAmI();
} catch (err) {
  console.error(err.message);
  renderError(err.message);
}
*/

// Await keyword will actually call the .then method for you "behind the scenes", so they are identical. Yes, they will "wait" for the promise to resolve and "block / stop" code execution at that line, but keep in mind that this doesn't happen on the main thread, so it won't block other synchronous code while it waits for the result...

// That's right. Web APIs run in separate threads. A single process can have multiple threads. Also, browsers usually create separate processes for each opened tab, plus some additional processes to handle different things, like plugins, etc.

// Web APIs are part of the JavaScript Runtime Environment. They can be called from the JavaScript engine, but they're executed by the browser in separate threads (not the JavaScript engine itself). Then, callbacks attached to Web APIs functions are put in the callback queue and executed synchronously by the JavaScript engine.

//////////////////////////////////////////////////////////////////////////// RETURNING VALUES FROM ASYNC FUNCTION
// HANDLING RETURNED VALUES FROM 'ASYNC' FUNCTION

/*
REMEMBER:
When code execution reaches an async function, the async function is putted in the background (Web APIs Environment) and code execution immmediately after putting the async function in the background moves to the next line and starts executing

I] WHAT 'async' function returns?
1. Async function ALWAYS returns "PROMISE" even if we explicity return something else
REASON: Because js has no way of knowing what async function will return as it puts the async functino in the background and 'async' function always returns promise

But, HOW to return some value that is NOT a promise?
- When we return something explicitly from 'async' function it will then be the "fulfilled" value of the promise which we can access using 'then()' method.

The value that we return from 'async' function will be the "fulfilled" value of the Promise that the 'async' function returns

II] ERROR in 'async' function:
- The Return value from the 'async' function will be the fulfilled value of the Promise that 'async' function returns
- If error occurs in the 'async' function, then the value can't be returned because as soon there is some error it will caught by the 'catch' statement and the code written further to error will not be executed

Eventhough there were some error in the 'async' function the log is printed, this means that the 'then()' method was called, which in means that the 'async' function returned a 'fulfilled' value.

Eventhough there was some error in the 'async' function the promise that the 'async' function returns is still 'fulfilled' and NOT 'rejected'? 

Here it returns promise because js do not have any way of knowing what this async function will return as the async function is still running in the background and therefore this function returns promise
*/

/*
const formatCountrySmall = country => country.toLowerCase().trim();
const formatCountryUpper = country =>
  country.split('')[0].toUpperCase() + country.slice(1);

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function (country) {
  try {
    // GET user's current position
    const positionUser = await getPosition();
    const { latitude: lat, longitude: lng } = positionUser.coords;
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
    );
    if (!res.ok) throw new Error('Reload Slower');

    const data = await res.json();

    // const res2 = await fetch(
    //   `https://restcountries.comasdfa/v3.1/name/${formatCountrySmall(
    //     data.address.country
    //   )}`
    // );
    const res2 = await fetch(
      `https://restcountries.com/v3.1/name/${formatCountrySmall(
        data.address.country
      )}`
    );
    if (!res2.ok) throw new Error('Reload Slower');
    const dataArr = await res2.json();
    const data2 = dataArr.find(d => d.name.common === data.address.country);
    renderCountry(data2);
    form.style.opacity = 0;
    countriesContainer.style.opacity = 1;
    return `You are in ${data.address.city}, ${data.address.country}`;
  } catch (err) {
    console.error(err.message);
    renderError(err.message);

    // RETHROWING ERROR
    throw Error('Something went WRONG');
  }
};

// const city = whereAmI();
// console.log(city);
// Returns PROMISE
// Because 'async' function always returns PROMISE

// BUT! How to get the value that is explicitly returned using 'return'
// By using
// 1. 'then()' method or
// 2. 'async IIFE function' (Not a regular function because don't wnat one we want it to be executed only ONE Time)

// 1. using 'then()'
// The value that is explicilitly returned from the 'async' function will be the 'fulfilled' value that promise returns
// whereAmI().then(city => console.log(city));

// BUT if some error HAPPENS in the 'async' function before it reaches the line in the 'async' function where we explicitly return some value (which will be fulfilled value) then the 'fulfilled' value will be 'undefined'
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.warn(err));
// In the above code, our console is printed, which means that the 'then' method was called, which in turn means that the promise (whereAmI) returned a "fulfilled" value
// But HOW it is logging this?
// Because the error was caught in the 'CATCH' block so the promise returns a "fulfilled" value
// And also the '.catch()' method is ALSO NOT loggin error to console which means the promise is "fulfilled" and the error was caught in the 'catch' statement or block

// HOW to FIX that?
// By doing something called "RETHROWING ERROR"
// What is rethrowing error? Just throwing error when it is caught in the 'catch' block so that it the promise will be rejected and the error will be caught by the 'catch' method
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.warn(err));

// But still there is a problem in the above code and that is "MIXING OF async/await & .then method"
// We could fix that using 'await' but it can't be used without the 'async'
// So what we do instead is use IIFE (Immediately Invoked Function Expression). Since IIFE is also function, so it can be made an 'async' function

// 2. using 'IIFE' with 'async/await'
console.log('1- Async process Started');
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2- ${city}`);
  } catch (err) {
    console.error(err);
  }
  // Putting it OUTSIDE of "try/catch statement" because we want it to be executed for BOTH 'Error' & 'Fulfilled' value
  console.log('3- Async process Ended');
})();

*/

//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
// RUNNING PROMISES IN PARALLEL

/*
* Here we want data of 3 countries. So they aren't related to each other
NOTE: When used run promise in parallel when none of the promise is related to each other

1. BAD PRACTICE
- Here these 3 promises are executing line by line which is bad for efficiency because these each of these promises are taking .5 seconds for loading which means 1.5 seconds in total. These aren't related to each other so instead of executing them line by line we should execute them in "PARALLEL"

2. BENEFIT of executing promises in parallel?
It will save time like in this case, we save 1s second which is also good

3. HOW to Execute Promises in parallel?
- Using 'Promise.all()' combinator and it is a static function of the Promise constructor
Promise.all([ ..,  ...]):
1. It takes an array of promises,
2. Returns a promise which runs all the promises in "parallel"
a. It returns the fulfillment value of all the promise in array
b. Promise.all short-circuits when any of the promise rejects

IMPORTANT: If any of the promise rejects which is in the promise array as an argument of the Prmise.all() method 
Promise.all() short-circuits when any of the promise rejects

4. What is Combinator function?
- It is called a combinator function because it allows to combine multiple promise
*/

/*

const find3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJson(
    //   `https://restcountries.com/v3.1/name/${c1}`,
    //   'NO country found'
    // );
    // const [data2] = await getJson(
    //   `https://restcountries.com/v3.1/name/${c2}`,
    //   'NO country found'
    // );
    // const [data3] = await getJson(
    //   `https://restcountries.com/v3.1/name/${c3}`,
    //   'NO country found'
    // );
    // console.log(data1);
    // console.log(data2);
    // console.log(data3);
    // console.log([data1.capital, data2.capital, data3.capital].flat());

    const dataAll = await Promise.all([
      getJson(`https://restcountries.com/v3.1/name/${c1}`),
      getJson(`https://restcountries.com/v3.1/name/${c2}`),
      getJson(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(dataAll.map(d => d[0].capital[0]));
  } catch (err) {
    console.error(err);
  }
};

find3Countries('India', 'Pakistan', 'China');
*/

//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////// Promise Combinator: race, allSettled & any

/*
1. Promise.race():
- It takes an array of promise
- It returns a promise
- And the returned promise is settled once any of the input promise settles
- Settled means value available, it doesn't matter rejected or fulfilled
- First settled promise wins the race
- So basically if a promise wins then that is the fullfilled value of the promise.race 
*/

/*
// 1. Promise.race()
const promiseRace = async function (c1, c2, c3) {
  const [dataAll] = await Promise.race([
    getJson(`https://restcountries.com/v3.1/name/${c3}asdf`),
    getJson(`https://restcountries.com/v3.1/name/${c2}`),
    getJson(`https://restcountries.com/v3.1/name/${c1}`),
  ]);
  console.log(dataAll);
};

promiseRace('India', 'Bangladesh', 'Afghanistan');

// Real-life use-case of Promise.race()
// - Very useful to prevent against never ending or long-running promises
// - for eg: if your user has bad internet connectino then the fetch request in your app may take too long to actually be useful
// And so we can create a special timeout promise which automatically rejects after a certain time has passed

// // REAL LIFE USE-CASE
const preventLongPromise = function (seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(
        new Error(
          'Your Internet connection is very slow try to switch to another connection'
        )
      );
    }, seconds * 1000);
  });
};

// // Promise.race checks which promise is fast so whichever promise gets settled first(rejected or fulfilled) and whichever is first then that would be the resolved or rejected value of the Promise.race
Promise.race([
  getJson(`https://restcountries.com/v3.1/name/china`),
  preventLongPromise(0.1),
]).then(res => console.log(res));

// // 2. Promise.allSettled
// - It returns an array of settled promise (no matter fulfilled or rejected)
// - It do not short-circuit it returns an array of settled promises
const promiseAllSettled = async function (c1, c2, c3) {
  const dataAll = await Promise.allSettled([
    getJson(`https://restcountries.com/v3.1/name/${c3}dasf`),
    getJson(`https://restcountries.com/name/${c2}`),
    getJson(`https://restcountries.com/v3.1/name/${c1}`),
  ]);
  console.log(dataAll);
};

promiseAllSettled('India', 'Bangladesh', 'Afghanistan');

Promise.allSettled([
  Promise.resolve('sucess'),
  Promise.reject('reject'),
  Promise.resolve('another success'),
]).then(data => console.log(data));

// 3. Promise.any
// - It returns only one promise which is fulfilled
const promiseAny = async function (c1, c2, c3) {
  const dataAll = await Promise.any([
    getJson(`https://restcountries.com/v3.1/name/${c3}`),
    getJson(`https://restcountries.com/v3.1/name/${c2}`),
    getJson(`https://restcountries.com/v3.1/name/${c1}`),
  ]);
  console.log(dataAll);
};

promiseAny('India', 'Bangladesh', 'Afghanistan');

*/

// SUMMARY:

/*
I] Promise.all Vs. Promise.allSettled
  1. Promise.all: 
    - It returns an array of fulfilled promise
    - It short-circuits if any of the promise is rejected

  2. Promise.allSettled: 
    - It returns an array of settled promise (no matter rejected or fulfilled)
    - It does NOT short-circuits, it just returns settled promise

II] Promise.race Vs. Promise.any
  1. Promise.race: 
    - It returns the first settled promise (no matter rejected or fulfilled)
    - It short-circuits as soon as any of the promise is settled

  2. Promise.any: 
    - It returns the first fulfilled promise
    - It short-circuits, as soon as it gets first fulfilled promise

*/

//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
