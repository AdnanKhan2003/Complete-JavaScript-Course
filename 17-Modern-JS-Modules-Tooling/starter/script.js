///////////////////////////////////////////////////////////////////////////
// AN OVERVIEW OF MODERN JAVASCRIPT DEVELOPMENT
// 43, 2:12

/*
How we write js today?
When we write code we don't just write all our code into one big script send that script as it is to the browser and call it a day.

Now it used to be like this but the way we build js app is changed tremendnously over years

MODULES:
- So back in the day we used to write code in one big script or multiple scripts
- But today, we divide our projects into multiple modules and these modules can share data between them and make our code more organised and maintainable

USE OF MODULES:
- One great thing about modules is that we can also include 3rd party modules in our code
- And there are 1000s of open source modules, which we also call packages that developers share on the "npm respository"
- And we can then use these packages for free in our code (Eg: React, Jquery or Leaflet libraray which we used in mapty project)
- All these packages are available through npm
- npm stands for "Node Package Manager" because it was orginailly deveoped together with Nodejs and for Nodejs
- However NPM has established itself as go to respository for all kinds of packages in modern javascript development
- Inorder to download, use or share packages we use the npm software installed in our computer
- And this is just a simple command line interface that allows us to do all that
- So NPM is both the respository in which packages live and the programs that we use on our programs to install and manage this packages

- Lets say that we are done writing our project c    ode
- So we divided it into multiple modules and we included some 3rd party modules as well
- And so now the development step is now complete
- But thats not the end of the story, atleast not when building a real world application
- Instead, our project is now need to go through build processs where one big final javascript bundle is build
- And thats the final file that we will deploy to our web server for production
- So basically its the javascript file that will sent to browsers in production 

What is PRODUCTION?
- Production simply means that the application is being used by the real users in the real world

Now a build process can be something really complex, but to keep it simple we'll only include 2 steps

- At the first step, we'll build our modules together in one big file, this is a pretty complex process which can eliminate unused code and compress our code as well
- This step is super important for two big reasons:
1. Older browser don't support modules at all and so code thats in the module can't be executed by any module by any older browser
2. It is better for performance to send less files to browser and its also beneficial bundling step compresses our code

2. We do something called "Transpiling/Polyfilling" which basically converts all modern javascript syntax and feature back to old ES5 syntax
- And this done using a tool called 'BABEL'`

SO THESE ARE THE 2 STEPS OF OUR BUILD PROCESS 
- AND AFTER THESE 2 STEPS, we end up with the final Javascript bundle ready to be deployed in server for production
- Ofcourse we don't perform these steps ourselves, instead we use a special tool to implement this build process for us. And the mose common build tools available are "Webpack" & "parcel" and this are called as "Javascript Bundlers" because they take our raw code and transform it in javascript bundle 

Javascript Bundlers
1. Webpack
- It is more POPULAR one, but it can be REALLY HARD & CONFUSING to set it up so there is a lot of stuff that we need to configure manually inorder to make it work properly
2. Parcel
- It is a zero configuration bundler which simply works out of the box and so in this bundler we don't have to write any setup code, which is amazing

NPM
- These development tool are also available in npm so just like packages that we include in our code we wil download and manage tools using npm as well
- And these tool include the live-server, the parcel bundler or bael to transpile code to ES5

so This is the high-level overview of how we develop modern javascript application today
*/
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// AN OVERVIEW OF MODERN JAVASCRIPT

/*

I] What is MODULE?
- Reusable piece of code that encapsulates implementation details
- Usually a "standalone" file but it doesn't have to be

TRUE for all languages
II] Inside Module
a. Module code
- It contains some code which is "module code"
b. Import & Export
- It also contains import & export
- We can export simple values and also functions 
c. Value obtained or returned (from import and export)
- Whatever we export from module is called "Public API"
- It is like a class where we can expose public API for other code to consume
- We can also import values from other modules
- And from other modules from where we import is called "DEPENDENCIES" of the importing module
- Because the code that is inside of module can't work without the code that it is importing from the external module 

* ADVANTAGES of Modules
1. COMPOSE SOFTWARE: 
- Modules are small building blocks that we put together to build complex applications
2. ISOLATE COMPONENTS: 
- Modules can be developed in complete ISOLATION without thinking about the entire codebase
(Each engineer can actually work on module without even understanding what other engineers are doing and how the entire camera works which makes it easy to collaborate on a larger team)
3. ABSTRACT CODE:
- Implement low-level code in modules and import these abstractions into other modules
(For eg: screen module doesn't care about the low-level implementation details of the controller module. It can simply import the controller module and use it to control other parts of the camera)
4. Organized Code:
- Modules naturally lead to more organized codebase

So we can break our code into seperate isolated and abstracted modules, this will automatically organise our code and make it easier to understand

Modules allows us to re-use the code in the project and even accross multiple projects
for eg: If we use a module to implement some mathematical functions in a certain project and then we need the same functions in the next project all we need to do is to COPY that module to the new project
for eg: Now the camera company can use the exact same lens or screen in different camera models. All because they nicely abstracted these components into self-contained re-usable modules

EXAMPLE to understand Modules
- Camera is made up of all different modules. And this is how we can compose software using modules as well
- So we can have one engineer working on lens and other on the screen, and even another one on the controller module


ES6 MODULES
- Modules stored in files, exactly one module per file.

Difference between ES6 Module and Script

ES6 Module                                    Script
1. Top-level variables              
Scoped to module                           Global
- Value inside of module          - This can lead to "global namespace 
can't be accessed from outside       pollution" where multiple scripts try
except by exporting the value       to declare variables with the same name
using 'export' keyword              and then these variables collide

* So the private variables are solution to this problem thus module was implemented

2. Default mode
- It is ALWAYS executed in         - It is executed in "Sloppy mode" by 
"Strict Mode"                        default
- NO need to MANUALLY declare
'strict mode'

3. Top-level 'this' keyword
- "undefined" at top-level          - It points to the window object 

4. Imports and Exports
- YES                               - NO
- With modules we can import
and export values using ES6
import and export syntax
// Code
__________________________
import {rand} from '.js';
const a1 = rand(1, 6);
const a2 = rand(1, 2);
const s = {a1, a2};
export {s};
__________________________
- NEED to happen at
top-level
- Imports are HOISTED
(Importing is the first
thing that happens in a
module)

5. HTML Linking
- We need to use script                 - <script>
tag with type attribute
set to "module"
<script type = "module">                

6. File downloading
- Downloading module files              - <script> are donwloaded by  
themselves 'asynchronously'               default in a blocking 
and this is true for modules              synchronous way unless we use
loaded from HTML as well as               'async' or 'defer' attribute on
for modules that are loaded by            the script tag
importing

/*
1. PARSING:
When a piece of code is executed the first step is Parsing code which is just to read the code without executing and this is the moment when imports are hoisted
The whole process of importing modules happens BEFORE the code in the main module is executed (In this eg: 'script.js' imports 'shoppingCart.js' in a SYNCHRONOUS way)


IMPORTING MODULES BEFOFE EXECUTION
1. Modules are imported 'SYNCHRONOUSLY'
Only AFTER all the imports are downloaded and executed the main script.js file will be executed as well
2. This is possible thanks to the top-level (static) imports, which make imports known before execution
If we import and export values outside of any code that needs to be executed then the js engine can know import and exports during the parsing phase so while the code is being read before the execution
If we were to allowed to import a module inside of a function then that function would have to be executed first before the import code happenned and so in that case modules could not be import in a synchronous way. So the importing module have to be executed first
Why load a module in a synchronous way
3. This makes bundling and dead code elmination possible
This is very important in large code base with 100s of modules which includes 3rd party modules where we only want small piece and not the entire module. So by knowing all dependencies between module before execution bundlers like webpack and parsel can join multiple modules together and eliminate bad code. And so this is the reason why we can import or export outside of any code that needs to be executed (if-else or function)

HOW MODULES ARE EXECUTED
2. DONWLOADS MODULES ASYNCHORNOUSLY: After the modules are arrived it has figured out which modules it needs to be import then these modules are downloaded from the server and this happens in an asynchronous way it is ONLY the importing operation that happens synchronously
3. LINKING "IMPORTS" TO "EXPORTS": After modules have arrived, its also parsed and the modules exports are linked to the imports in the script.js
For eg: 'shoppingCart.js' module exports a function which is then linked to the "order" import in the 'script.js' module and this connection is actually a live connection. Imports are basically just reference to the export value which means that the value changes in the exporting module will also change in the importing module
Other modules system don't work this but javascript ES6 modules do
Code in importing module gets executed
(ShoppingCart module exports a function called )
4. EXECUTION OF MODULES: The code in the imported modules is executed
And with this process of importing modules is finished
5. EXECUTION OF IMPORTING MODULES: Finally importing modules are also executed
*/

///////////////////////////////////////////////////////////////////////////
// IMPORTING & EXPORTING IN ES6 MODULES

/*
There are 2 types of EXPORT that needs to be handled
1. Named Import
2. Default Import
*/

// 1. HOW to IMPORT Modules
// I] Use "{}" for "name export"
// import {now} from './shoppingCart.js';
// console.log(now);

// II] NO Need to use "{}" for "default export"
// import myFunc from './shoppingCart.js';
// console.log(myFunc('Bread', 23));

// II] Use "{}" (curly brace) seperated by commas to import one or multiple values
// import { now, addToCart } from './shoppingCart.js';
// console.log(now);
// addToCart('Pizza', 23);

// IV] Use "default, {}" for 'name export' and 'default export' BOTH
// import addToCart, { now } from './shoppingCart.js';

// console.log(now);
// addToCart('Pizza', 23);

// 2. Use ".. as .." CHANGE 'VARIABLE' or 'VALUE' name
// I] For "name" export
// import { now as today } from './shoppingCart.js';
// console.log(today);

// II] For "default" export
// import { default as mainFunc } from './shoppingCart.js';
// mainFunc('Burger', 2);

// 3. Import EVERYTHING (NOT Recommended)
// import * as user from './shoppingCart.js';

// console.log(user.now);
// user.default('Pizza', 3);

// NOTE: "Imports" are NOT copies of "Exports" rather they are "COPIES" of export, so basically a 'LIVE CONNECTION' which means that they (import & export) BOTH "points" to the same object in the memory
// Proof: Calling order in the imported module resulted in changing the cart array in both files

// import order, { now, cart } from './shoppingCart.js';

// order('Pizza', 3);
// order('Pizza', 3);
// order('Pizza', 3);
// order('Pizza', 3);
// order('Pizza', 3);
// order('Pizza', 3);
// order('Pizza', 3);
// console.log(now, cart);

///////////////////////////////////////////////////////////////////////////
// TOP-LEVEL AWAIT

// I] Using 'await' outside of 'async' function
// Before we could ONLY use 'await' inside of an 'async' function BUT in MODULES we can use await outside the function as a top-level code that's why it is called as 'Top-level await'

// const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await resp.json();
// console.log(data);

// UNCOMMENT ME!!!!!!!!
// const randomPost = async function () {
//   const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await resp.json();
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// It will return pending promise because the 'async' function returns promise and to handle that promise either 'async/await' or '.then()' method is used
// const myData = randomPost();
// console.log(myData);

// NOT Recommended to 'mix' "async/await" & ".then()"
// randomPost().then(data => console.log(data));

// Here 'T
// REMEMBER: Use 'await' because 'async' function always returns promise
// const data = await randomPost();
// console.log(data);

// II] PROBLEM with "Top-level await"
// The "Top-level await" will block the code execution of the rest of the module which may be inefficient especially when the promise is actually a long-running task

// 1. Blocks code execution of the importing module
// console.log('Start Fetching');
// // The "BELOW" line code will block the code execution of the module (change the network to "Slow 3G" in network tab available in dev tools)
// const data2 = await randomPost();
// console.log(data2);
// console.log('End Fetching');

// 2. When one module imports another module which has top-level await then the importing module waits for the imported module to finish 'block-level code'
// In this example: The 'script.js' will now wait for the block-level code in the 'shoppingCart.js' module to finish
// import { now } from './shoppingCart.js';
// console.log(now);

///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// THE MODULE PATTERN

// The main goal of the module pattern is to encapsulate functionality to have private data and expose public API
// And the best way to do that is use functions because function allows us to have private data by default and allow us to return values which can become our public API

const shoppingCart = (function () {
  const cart = [];
  const totalPrice = 32;
  const totalQuantity = 32;
  const shippingCost = 10;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart`);
  };

  const order = function (product, quantity) {
    console.log(`${quantity} ${product} ordered to supplier`);
  };

  return { cart, totalPrice, totalQuantity, addToCart };
})();
console.log(shoppingCart);

// A variable 'cart' that was declared in IIFE (shippingCost) and once the IIFE finished its execution and was popped off the call stack we still had access to the cart variable and thats because of the CLOSURE
// CLOSURE is a function bundled together with reference to its lexical environment or surrounding state
// A closure gives you an access to an outer function's scope from an inner function
// In javascript, closures are created every time function is created, at function time
shoppingCart.addToCart('Pizza', 23);
console.log(shoppingCart.cart);
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// COMMON JS MODULES

/*
I] Module Systems
- Besides ES Modules and module patterns there are also other module systems that have used by javascript in the past
But they were not native javascript instead they relied on external implementation
- 2 Examples are AMD and Common js modules

i) Common js modules
Common js modules have been used in node.js from almost all its existence
Recently Es Modules have been implemented in node.js
Node js is a way of running javascript on a web server outside of the browser
The big consequence of this is almost all modules in the npm repository, all this module that we can use in our code still use common js modules
Because npm was intended for node which uses common js modules. Only later npm became the standard repository for the whole javascript
That's why we will a lot of common js module still around

So there are many types of module system, the one before ES6 module exists which is Module Pattern, and many others like ES6 module, CommonJS and AMD. Nowadays, CommonJS is used in NodeJS, while ES6 modules is used in JavaScript. And recently, ES6 modules even has been introduced to NodeJS.

COMMON JS MODULES
There are many module systems but Common js is important in the javascript world
In the long the ES6 Modules will maybe replace all of this different module systems but its gonna be a long way

a. EXPORTING
Just like in ES6 Modules, In common js one file is one module

Syntax: export, ., name
This would not work in js but it WOULD work in node js
Export keyword is an object (not defined here in our code neither on browser but in node js it is an important object)
export/exports.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

b. IMPORTING
'require' is not defined here in our browser environment but it is in node js because this is part of CommonJs specification
const {addToCart} = require('./shoppingCart.js');

1. How to use 3rd party packages from npm
2. How to bundle all modules together
3. How to transpile our code back to ES5 for old browsers
*/

///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// A BRIEF INTRODUCTION TO COMMAND LINE

/*
I] COMMAND LINE
- All this build tools that are avialable on npm only work in command line
- The first thing about command line is that you are always in a folder
Vs code feature
- So right now we are in this project folder and thats the beauty of vs code
- Whenever we open a terminal in visual code we are always in our project folder
- And from this location in the file system, we can move up and down using commands
(windows => dir, unix base system => ls)

II] COMMANDS to MOVE UP in the FILE TREE, ADD, DELETE FILES & FOLDERS 
1) dir => directory OR ls => list
=> This will show the content of the current folder
2) cd => Change directory
=> With this we can go up and down the file tree
  - To move UP use => cd ..
  - To move UP 2 leels use => cd ../..
  - To move DOWN use => cd "file name"
3) clear => 
=> To Clear the console or terminal
4) mkdir => make directory
=> To Create folders
  - mkdir "filename"
5) new-item (edit for windows and touch for mac)
=> To Create files
  - new-item script.js
  - new-item script.js bankist.js mapty.js (typing multiple name after edit will make multiple files)
6) Ctrl + C 
=> To cancel operation
7) del => delete or rm => remove
=> To Delete the files
   del fileA fileB
8) mv => move
=> It takes the file thats needed to be moved to the desired location
  - mv mapty.js ../
   - ../ => means parent folder here
9) rmdir => remove directory
=> To remove the directory (only works for empty)
  - rmdir img


NOTE: Use "up" arrow to see your past commands
*/
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
//

/*

i. WHAT is npm
1. npm stands for "Node Package Manager"
2. npm is BOTH software and package repository

I] Why do we need a way of managing packages or dependencies in our project

i) Including 3rd Party Libraries (when there was NO npm)
- Back in the day when didn't had npm we used include third party libraries directly in our html using script tag
- And this would then expose a global variable that we could and thats exactly what we did in our mapty project
- We imported "leaflet" library before our script, so that our script can use the global variable exposed by this library here

Problem of including libraries using script
1. HTML loading our javascript
- This create problems atleast in big projects
- It doesn't make sense that HTML is loading our js
2. Library Update
- Many times we would actually download a library file to our computer directly.
- For eg: Whenever a new version would come out we would have to manually go to the site, download the new version, chnage the file in our file system manually and then include it here again, maybe with some other name with some another version number
3. Manually donwload libraries
Before npm there was NOT a single repository that contained all the packages that we might need. And this made it even worse and more difficult to MANUALLY download libraries and manage on our computers
Eg: Dozens of Jquery plugins that you would have to keep updated

II] Using npm

i. WHY?
- We need to manage our dependencies in a better and more modern way and "npm" is exactly how we do it

IIA) How to USE "npm"

1. Check whether npm have actually installed in our machine 
-> npm -v (version) [should be 6<n]

Now in each project we wanna use npm we start by..
2. INITIALIZING
-> npm init
- It will ask us couple of question to CREATE "package.json" file
- Then we get a special file called "package.json" which npm creates
- "package.json" stores the ENTIRE "configuration" of our project


III] Installing libraries using javascript package manager npm

Leaflet, lodas

1. Installing package
-> npm install "packageName"
-> npm i "packageName"

IV] 2 Things happens when we install a library throught npm 
1. New field for dependencies is created and it contains the depdnecies name and version
2. It creates "node modules"
All the packages will be store in "node modules"

NOTE:
i) Using library without module bundler
Using library would NOT be easy without a module bundler because it uses common js modules. For eg: Leaflet

Lodash is a collection of a ton of useful functions for arrays, arrays, objects, functions, dates and more

PRACTICAl

1. npm i lodash-es
- It will be in our dependencies
- This package will be added to the node modules

*/

// Importing packages like we did here by specifying this entire path is NOT practical

/*

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const person = {
  firstName: 'Shyana',
  qualifications: [
    'BSc IT, BSc CS, B.Pharma, M.Pharma, Phd Pharma, MBBS, MS, MCA, Phd CS',
  ],
  college: [
    { name: 'A', grade: 'A' },
    { name: 'B', grade: 'A' },
    { name: 'C', grade: 'A' },
  ],
};

// Shallow clone
const clonePerson = Object.assign({}, person);

console.log(person);
// Here changing the clone object results in also changing the person object because they point to the same object in the memory

// The purpose of creating clone object is that mutating the clone object should NOT result in mutating the original object which was the target from which the object was cloned
console.log(clonePerson);

// DEEP CLONING
// So we'll use "cloneDeep" function which we imported from other packages

const cloneDeepPerson = cloneDeep(person);
clonePerson.college[0].name = 'ABC';
console.log(cloneDeepPerson);

*/

/*
IMPORTANT:
- If we want to MOVE your project into other computer or also share it with other developer or even check into version control git
- Now in all these scenarios you should never include "node modules" folder
- When you copy your project to somewhere else here's NO reason for including "node modules" folder because in real project it will be REALLY HUGE, so if we 10s of 1000s of files so that will just slow you down which doesn't make sense
- ALL these files are availabe in npm and you can always get them back from there

1. If i copy my project WITHOUT dependencies will I have to install them 1 by 1, what if i have 20 or 200 dependencies
-> This is where this important "package.json" file comes into play

Practical (of DON'T COPY your "node modules")
1. DELETE "node modules" folder
2. And to get back all dependencies just type "npm i"
(npm wil reach into your package.json file look at all the dependencies and install them back)
(NOTE: You MUST be in the folder in which node modules is included)
*/

///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// BUNDLING WITH PARCEL AND NPM SCRIPTS

/*
* Module Bundler
We're gonna use a module bundler called "Parcel"

1] Parcel
- It is super FAST & EASY to use
- It works out of the box without configuration
- It is just another "build tool" which is avialable on npm
- It is used in command line because it is just other "command line interface"

2] Dev Dependency
- dev dependencies is a tool that is required to build an application or project so a build tool
- but its NOT the dependency which we include in our code
- It is included in the new field of in our package.json

3] "REGULAR" Vs. "DEV" DEPENDENCY
- The libraries that we include in our code are "regular" dependencies
- And parcel is a "dev" dependency

parcel index.html
- This does NOT work with local packages 
- And parcel was installed locally ONLY on this project
- And that's why it showed up in "package.json" of this project
- There are also global installations
- In order to still be able use parcel in our console there are two options npx or npm scripts

npx
- An application built in npm
- npx parcel index.html
- Entry point because script file is included there which we wanna bundle up

npx parcel index.html
- The goal of parcel to bundle these modules together
- Parcel starts development server in this url
- Besides bundling it also does the job of live-server
- We started this development server using live-server package and the this (bundler) one does exactly the same
- There is only DIFFERENCE in port
- local host === 127.0.0.1

INSTALL Parcel
npm i parcel --save-dev
sudo npm i parcel
npx parcel index.html

How does Parcel bundles multiple modules in 1 big file?
- parcel creates a script
- So we no longer are using module but script so we should remove ""type="module"" from the script tag in html
- Modules do NOT work in older browsers
1. It created is dist folder (distribution) which will essentially be the folder send for production
The code in this folder will be sent to the final user
2. It bundled together all modules All the code that was spread accross module is now in one script
We will remove "unused" code in build step right now we're in development step. During development it will NOT compress everything
3. Whenever we save the file it refreshes but we do even better by implementing hot module replacement
*/

// We can improve this by just adding the module name
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// EFFECIENT
// We don't have to right full path to the module rather we can just type the "module name" and the parcel will automatically find the path to that module and import it
// import cloneDeep from 'lodash-es';

// OR we can just import lodash that use old common js modules
// import cloneDeep from 'lodash';

/////////////////////////////////////////
// Now the below modules will be bundled into one big file
import cloneDeep from 'lodash-es';

const person = {
  firstName: 'Shyana',
  qualifications: [
    'BSc IT, BSc CS, B.Pharma, M.Pharma, Phd Pharma, MBBS, MS, MCA, Phd CS',
  ],
  college: [
    { name: 'A', grade: 'A' },
    { name: 'B', grade: 'A' },
    { name: 'C', grade: 'A' },
  ],
};

// Shallow clone
const clonePerson = Object.assign({}, person);

console.log(person);
// Here changing the clone object results in also changing the person object because they point to the same object in the memory

// The purpose of creating clone object is that mutating the clone object should NOT result in mutating the original object which was the target from which the object was cloned
console.log(clonePerson);

// DEEP CLONING
// So we'll use "cloneDeep" function which we imported from other packages

const cloneDeepPerson = cloneDeep(person);
clonePerson.college[0].name = 'ABC';
console.log(cloneDeepPerson);

import addToCart, { now } from './shoppingCart.js';
console.log(now);
addToCart('Pizza', 23);

// HOT MODULE REPLACEMENT
// This code ONLY parcel understands and that's why it will not make into production
// Hot Module Reloading
// When changes is made in any of the modules, it triggers rebuild (development server) but then the new modified module will automatically  gets injected into the browser without trigerring whole page reload
// So whenever we change something here so then it will not reload the part of the page which will be amazing for maintaining the state of the page whenever we are testing out something.
// Eg: In our bankist app whenever we reloaded the page we needed to login again into the application
// But with "Parcel" & "Hot Module Replacement" thats NOT going to happen because the page will NOT reload

if (module.hot) {
  module.hot.accept();
}
console.log('wo');

// npm scripts
// npm scripts are another way of running locally installed packages in command line
// They also allow us to eliminate "repetitive" tasks
// And that way we don't have to write "npx" "parcel" and other things again and again
// Practical
// npm run start
// "package.json" file: change under "scripts" and set "start" = "parcel index.html"

// REAL WORLD
// And once we are done developing the project its time to final bundle
// So the bundle that is 'compressed' and has "dead code elimination"

// Compressing file and dead code elimination
// Practical
// npm run build
// "package.json" file: change under "scripts" and set "build" = "parcel build index.html"
// Lets see the compressed file in the 'dist' folder and there
// HTML file looks different and is compressed now
// And the script that we can ship to the browser and user is this one
// And js is compressed to unreadle mess but that is performant than the script that we had before

//** */ We can also install packages globally
// npm i parcel -g (-g global)
// This is the way we installed "live-server" package and because of that we can use it in every directory in our computer

// The different between globally & locally installed packages and especilayy these tools like parcel and live-server is that we can use the global tools directly in the command line without the intermediary step of this npm script

// Most of these tools advice to install tools locally so that they can always stay on the latest version
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// CONFIGURING BABEL AND POLYFILING

/*
BABEL
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:

Transform syntax
Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
Source code transformations (codemods)

- Now we activated "bundling", its time to configure 'babel' to transpile our super modern code back to ES5 code

TRANSPILING (converting code to ES5)
- It is still important even after many years of release of ES6 standard
There will be users that are stuck on windows 7, Xp or can NOT upgrade their internet explorer

BABEL
- Babel works with BOTH 'plugins' & 'presets'
1. Plugin => A specific javascript feature that we want to transpile (convert). Eg: We want to convert 'arrow functions' to ES5 and leave every other thing to ES6

- BUT that does NOT make sense because we would want to transpile everything at the same time
- So instead of using single 'plugins' for each of these features Babel uses 'presets'

2. 'presets' => Buch of 'plugins' bundled together

Babel default behaviour 
- By default babel is gonna use this preset "@babel/preset-env". This preset will automatically select which javascript features should be compiled based on 'browser support' 
- This will all happen automatically and out of the box babel will convert all features 
- So only browsers that are barely used with a market chair of 0.25% are NOT going to support by the transpiling this preset

SYNTAX Vs. FEATURES

1. Syntax that we have an equivalent way of writing them in ES5
- Arrow functions, const, class or spread operator, they have an equivalent way of writing them in ES5
- Arrow function is simply a different syntax so babel can convert it into a regular function, same for const it can be converted to var. 

2. ES6 Features
- The same is NOT true for real features added to language they can NOT be transpile, its NOT possible only syntax is easy to convert or compile like promise, array methods
- But for ES6 features like Promise, array methods we can POLYFILE them

TRANSPILING => To Convert the ES6 code back to ES5 for syntax that have an equivalent way of writing them like arrow functions, const, class or spread operator
POLYFILING => To Convert the ES6 features that is added to language like Promise, array methods

babel.preset-env => This plugin only includes FINAL features
So features that are already the part of the language after passing 4 stages of ECMA process

1. TRANSPILING
- By default Parcel does not perform any transpilation of JavaScript syntax for older browsers. 
- This means that if you write your code using modern language features, that’s what Parcel will output. 
- You can declare your app’s supported browsers using the browserslist field in your package.json.
- When this field is declared, Parcel will transpile your code accordingly to ensure compatibility with your supported browsers.
//   "browserslist": "> 0.5%, last 2 versions, not dead"

*/

/*
import { cart } from './shoppingCart.js';
import order from './shoppingCart.js';

// Sytnax that have an equivalent way of writing them in ES5
// - Arrow functions, const, class or spread operator, they have an equivalent way of writing them in ES5
// but now they are written as it is

// OUT-OF-BOX => Features and functionality are available for all users by default and do not require customization, modification, configuration, scripting, add-ons, modules, third-party tools, or additional fees in order to be used.

// I] SYNTAX
// Eg:
// Arrow function is a different o babel can write regular function instead of arrow function
// Const can also be converted to var
// But same is NOT true for features added to language they can NOT transpile
// ONLY syntax is easy to convert

// 1. class
class Person {
  constructor(name) {
    this.name = name;
  }
}

// 2. const
const adnan = new Person('Adnan');
console.log(adnan);

// 3. Arrow function
const printMyName = name => console.log(name);
printMyName('Adnan');

// 4. Spread operator
const arr = [1, 2, 3, 4];
console.log(...arr);

// 5. NUllish Coalescing
console.log('adnan' ?? null);

// II] ES6 Features
// he same is NOT true for real features added to language they can NOT be transpile, its NOT possible only syntax is easy to convert or compile like promise, array methods

// 1. Array Methods
order('Burger', 10);
console.log(cart.find(d => d.quantity < 14));

// 2. Promise
Promise.resolve('success').then(d => console.log(d));

// So how to run ES6 features in older browsers

// Both commands are meant for improved readability, since "--no-optimize" means that the final code won't be squeezed into a single line and "--no-scope-hoist" means that the variables' names will be as in the original js files (otherwise they will be converted). You can read more about that here: https://parceljs.org/features/cli/#:~:text=Parameters%20specific%20to%20build

import 'core-js/stable';
// import 'core-js/actual';
// To reduce bundle size import specific package that you wanna import

// async function

const getObj = async function () {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await resp.json();

  const dataReal = data.find(o => o.title === 'qui est esse');

  return dataReal;
};

getObj().then(d => console.log(d));

// DONT touch this!
// const myPos = await getMyPos();
// console.log(myPos);

import 'regenerator-runtime/runtime';

*/

// Without typing '--target default', "npm run start" will NOT work
// --no-optimize: File will NOT be squeezed
// "start": "parcel --target default index.html",
// --no-scope-hoist: It will prevent variable name from CONVERTING
//     "build": "parcel build index.html --no-optimize --no-scope-hoist"
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// REVIEW: MODERN & CLEAN CODE

/*
1. READABLE CODE
- Write code so that OTHERS can 'understand'
- Write code so that YOU can 'understand'
- Avoid too "clever" and "overcomplicated" SOLUTIONS
- Use DESCRIPTIVE variable names: what they CONTAIN
- Use DESCRIPTIVE function names: what they DO

2. GENERAL
- Use DRY principle (refactor your code)
- DON'T pollute global namespace, encapsulate instead
- DON'T use 'var'
- Use 'STRONG TYPE CHECKS' (=== and !==)

3. FUNCTION
- Generally, functions should 'do' only ONE THING
- DON'T use more than "3 function" PARAMETERS
- Use DEFAULT parameters whenever possible
- Generally, 'return' some data type as RECEIVED
- Use 'arrow functions' when they make code more READABLE

4. OOP
- Use ES6 classes
- ENCAPSULATE data and DON'T "mutate" it OUTSIDE the class
- Implement "Method chaining"
- Do NOT use "arrow functions" as METHODS (in REGULAR objects)

A. AVOID NESTED CODE
- Use early 'return' (GUARD CLAUSE)
- Use TERNARY (conditional) or LOGICAL operators instead of 'if'
- Use MULTIPLE 'if' instead of 'if/else-if'
- AVOID 'for' loops, use ARRAY METHODS instead
- AVOID 'callback-based' ASYNCHRONOUS APIs

B. ASYNCHRONOUS CODE
- CONSUME 'promises' with 'async/await' for best READABILITY
- Whenever possible, run PROMISES in "parallel" (Promise.all)
- HANDLE 'errors' and promise REJECTIONS
*/
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// IMPERATIVE, DECLARATIVE AND FUNCTIONAL JAVASCRIPT PRINCIPLES

/*
There are 2 different ways of writing code (paradigm)
1. Imperative
2. Declarative

1. Inperative:
- Programmer explains "HOW" to do things
- We explain the computer every single step it has to follow to achieve a result
Example: Step-by-step recipe of cake
// Eg
const arr = [2, 4, 6, 8];
let doubled = [];
for(let i = 0; i < arr.length; i++)
  doubled[i] = arr[i] * 2;


2. Declarative
- Programmer explains "WHAT" to do
- We describe the way that computer should follow to achieve a result
- The "HOW" (STEP-BY-STEP INSTRUCTIONS) is abstracted away
Example: Description of cake
// Eg
const arr = [2, 4, 6, 8];
const doubled = arr.map(el => el * 2);

Declarative is really big and popular paradigm which has given rise to a sub-paradigm called functional paradigm 

2.1 FUNCTIONAL PROGRAMMING
- Declarative programming paradigm
- Based on the idea of writing code by combining many pure functions, avoiding side effects and mutating data

What is "Side effects"?
-> Modification (mutation) of any day outside of the function. (mutating external variables, logging to console, writing to DOM, etc)

What is "Pure functions"?
-> Function WITHOUT side effects. Does NOT 'depend' on external variables. If we give same inputs to pure function it will always return the same output

- Functional programming is about avoiding mutating data
- And we do that using something called immutability

IMMUTABILITY
- Lets say in our application we have an object which keep tracks of all the data that we nned in our application an thats called state
- So in functional programming that state in NEVER "modified" instead what we do is copy that object (state) and it is that copy that is mutated and can then be returned but the original state is NEVER touched
- And thats whtat mean for the state is "immutable"

What is "IMMUTABILITY"
-> State (data) is NEVER modified. Instead, state is copied and the copy is mutated and returned

UPSIDE of immutability
And the upside of immutability it makes it so easier to keeps track of how data flows in our entire application
- It will allow to write better code and code that is readable
(Goal of using functional programming)

TECHNIQUES:
FUNCTIONAL PROGRAMMING TECHNIQUES
1. AVOID 'data mutation'
2. Use "built-in-methods" to avoid SIDE EFFECTS
3. Do Data transformation with mehtods such as 'map()', 'filter()' & 'reduce()'
4. AVOID 'side effects' in functions (This is ofcourse NOT always possible)

DECLARATIVE SYNTAX
1. Use array and object 'destructuring'
2. Use 'spread' operator
3. Use 'ternary operator'
4. Use 'Template literal'

1. Immutability
2. Side effects and pure functions
3. Data transformation using 'pure function' such as map, filter and reduce
*/
///////////////////////////////////////////////////////////////////////////
