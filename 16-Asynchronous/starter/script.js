'use strict';
const btnBack = document.querySelector('.btn-back');
const form = document.querySelector('.form-info');
const inputCountry = document.querySelector('.country-name');
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
let counter = 0;

const renderCountry = function (data, className = '') {
  // Variables
  console.log(data);
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
- So bascially this entrie back and forth between client and server happens for every single file that is included in the webpage
- However there can be multiple request and response happening at same time but the amount is still limited otherwise the connection would start to slow down
- When all the files are finally arrived then the webpage can be rendered in teh browser according to HTML, css and javascript specification


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

ADVANTAGES of PROMISES:
- We NO longer need to RELY on 'events' and 'callbacks' passed into the asynchronous function to handle asynchronous results
- Instead of NESTING callbacks, we can CHAIN promises for a SEQUENCE of asynchronous operations: ESCAPING callback hell

The PROMISE LIFECYLCE:
Since promise work with asynchronous operations they are time sensitive so they can over time and so promises can be in different state. So this is what we call 'PROMISE LIFECYCLE'

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
- We consume a promise we already have a promise eg A promise returned by the fetch API.
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

///////////////////////////////////////////////////////////////////////////// HANDLING REJECTED PROMISES

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
    // SOLUTION use catch(): To catch every error at the end of the chain or else error will be UNCAUGHT
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
2. If PROMISE is SETTLED either as FULLFILLED or REJECTED
3. If PROMISE is FULFILLED then the 'FIRST argument' of the '.then()' function is called
4. If PROMISE is REJECTED then the 'SECOND argument' of the '.then()' function is called

=> PROBLEM with using 2nd callback function in '.then()' method
- Problem is that if we have multiple fetches then we will have multiple promise so to handle each promise we have to attach the error handler as the 2nd argument of each of those promise in the '.then()' method which is not good

=> SOLUTION:
- So the SOLUTION is "CATCH()" method at the end of the promise chain
- It CATCHES every error occured in the promise chaining and if there is no "catch" used or 2nd argument is inserted on '.then()' then the error remains UNCAUGHT

Even if there is no country of input provided the promise will be fulfilled
with 404 the promise will still get fullfilled
*/

///////////////////////////////////////////////////////////////////////////// THROWING ERRORS MANUALLY

const getJson = function (url, errorMessage = 'Something went wrong!') {
  console.log(url, errorMessage);
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
  country = country.toLowerCase();
  console.log(country);
  getJson(
    `https://restcountries.com/v3.1/name/${country}`,
    'NO such country found'
  )
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      // const neighbour = 'alu';

      console.log(data[0]);
      if (!neighbour) {
        throw new Error('NO neigbours found');
      }

      console.log(neighbour);
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'NO country found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    // SOLUTION use catch(): To catch every error at the end of the chain or else error will be UNCAUGHT
    .catch(err => {
      renderError(`${err}`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', function (e) {
  e.preventDefault();
  let counter = 0;
  counter++;
  if (counter === 1) getCountryData(inputCountry.value);

  form.style.opacity = 0;
});
// getCountryData('nepal');

btnBack.addEventListener('click', e => {
  e.preventDefault();
  form.style.opacity = 1;
  inputCountry.value = '';
  inputCountry.blur();
  inputCountry.focus();

  document.querySelectorAll('.country').forEach(c => c.remove());
  document.querySelectorAll('.neighbour').forEach(n => n.remove());
  countriesContainer.style.opacity = 0;
});

// Whenever error happens it results in rejecting the promise and the error propagates down in the chain and if there is '.catch' method at the end of the chain then the error will be caught and the error message will be displayed
// Creating and throwing errors results in rejecting promise and then the error travels down until the catch method catches the error and display the error we created

// Note: then function always returns the promises otherwise it can't be used
