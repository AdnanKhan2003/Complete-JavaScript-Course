'use strict';

/*
1] What is JavaScript?
--> JavaScript is high-level, object-oriented, multi-paradigm programming language.

JavaScript is...
i. High-level
ii. Garbage-collected  
iii. Interpreted or just-in-time compiled
iv. Multi-paradigm
v. Prototype-based object oriented
vi. First-class Functions 
vii. Dynamic 
viii. Event Loop Concurrency Model / Non blocking event loop
ix. Single-threaded

--  --
Every program in your computer needs some hardware resources such memory and CPU to do its work

-- `] LOW $ HIGH LEVEL PROGRAMMING LANGUAGE --

A. Low-level 
- Developer has to manually manage resources
- Program is fast and optimized

B. High-level
- Everything happens automatically. Developer does not have to worry
- Program is not fast and optimized as low level languages

-- ABSTRACTIONS --
- An abstraction is a way of hiding the implementation details and showing only the functionality to the users.
- In other words, it ignores the irrelevant details and shows only the required one.


-- 2] GARBAGE COLLECTION --
- It is an 'algorithm' inside a 'JavaScript Engine' which automatically removes old, unused objects from the computer memory inorder to not clog it up with the unnecessary stuff
- One of the powerful tools that take 'memory management' away from developers is "garbage collection"

Ex: JavaScript has a 'cleaning guy' which time-to-time cleans memory so that we don't have to do it manually in our code

Processors only understands 'binary language' (1s & 0s) which is not practical to write. So we write code in human-readable code in using programming languages

-- 3] INTERPRETED OR JUST-IN-TIME COMPILED -- 
- It is an abstraction over machine code. 
- 'Human-readable Code' needs to be translated to 'machine code'.
- That step can be either "compiling" or "interpreting"

-- 4] MULTI-PARADIGM -- 
- An approach or mindset of structuring code, which will direct your coding style and techniques
3 Popular paradigms are as follows
1. Procedural Programming
-> Organising the code in a very linear way with some functions in between.
2. Object-Oriented Programming (OOP)
-> It is a prototype-based object-oriented approach
3. Functional Programming (FP)

_____________________________________________________________________
REMEMBER THIS!!!!!!!!!!
>>> 1] WE CAN 'CLASSIFY' PARADIGMS AS "IMPERATIVE" & "DECLARATIVE" <<<
>>> 2] "EVERYTHING" IN JAVASCRIPT IS AN "OBJECT" EXCEPT FOR 'PRIMITIVE VALUES' SUCH AS (NUMBERS, STRINGS, BOOLEANS, ETC). 'ARRAY' IS ALSO AN 'OBJECT' <<<
--------------------------------------------------------------------

-- 5] PROTOTYPE-BASED OBJECT-ORIENTED --
-- PROTOTYPAL INHERITANCE --
___________________________________________________________________________
|  PROTOTYPE                                                              |
|                            ARRAY                                        |
|                                                                         |
|                      Array.prototype.push                               |
|                      Array.prototype.indexOf                            |
|_________________________________________________________________________|

- We create arrays from an array blueprint, which is like a template and called 'prototype'
- This 'prototype' contains all 'array methods' and the arrays that we create in our code then inherit the method from blueprint so that we can use them in the arrays

-- 6] FIRST-CLASS FUNCTIONS --
In a language with first-class functions, functions are simply treated as variables. We can pass them into other funcitons, and return them function functions.
EXAMPLE:
FIRST-CLASS FUNCTIONS:
PASSING A FUNCTION INTO ANOTHER FUNCTION AS AN ARGUMENT: 

-- 7] DYNAMIC LANGUAGE --
- JavaScript is a dynamic language.
- Dynamic means "dynamically typed"

-- STRONGLY-TYPED LANGUAGE --
- Strongly-typed language means where we have to define the datatype of the variable when creating variables

>>> 1] JavaScript doesn't define datatypes when creating variable <<<
>>> 2] It became known when the JavaScript engine executes our code <<<
>>> 3] The type of variable can be changes as we reassign it <<<

-- 8] EVENT LOOP CONCURRENCY MODEL  / NON-BLOCIKING EVENT LOOP

-- Concurrency Model
- How the JavaScript engine handles multiple tasks happening at the same time

-- 9] SINGLE-THREADED --
- JavaScript runs in one single-thread, so it can only do 1 thing at a time. Therefore we need a way of handling multiple things happening at the same time

MEANINGS
-- Single thread: It can do 1 thing at a time
-- Thread: In computing, a thread is like a set of instructions that is executed in the computer's CPU
Basically thread is where our code is actually executed in the computer's processor
*/
