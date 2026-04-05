# Unit Testing

Unit testing involves testing units of code so that functionality can be confirmed within the application. 

A unit testing framework offers both immediate and long-range benefits. In the short term, unit tests facilitate a quicker development process by allowing for automated testing. Over the long term, unit testing yields savings in labour costs because less debugging is needed for code changes or package updates.

Unit tests can be automated into the build pipeline so that they are run on checkin or push. This yields immediate feedback to the developer so that issues are found and fixed early.

- [Unit Testing](#unit-testing)
  - [Jest](#jest)
  - [Install Jest](#install-jest)
  - [Setup](#setup)
  - [Creating test files](#creating-test-files)
  - [Creating tests](#creating-tests)
  
[Return Home](/basics)

## Jest

Jest is a JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

**[`^        back to top        ^`](#unit-testing)**

## Install Jest

With these commands from your project folder:

``` bash
npm i jest --save-dev
npm i @types/jest --save-dev
```

**[`^        back to top        ^`](#unit-testing)**

## Setup

Create a folder called `tests` in the root of your project. This will be where you put all the tests for your code. Under this, I like to mimic the folder structure for what is in `src`. This way it is easy to map tests to code.

in your `package.json` file, under the scripts section, add en entry for `test`.

``` json
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage"
```

In your `.gitignore` file, add a line to exclude the test coverage folder. (something created when you run tests)

``` bash
/coverage
```

**[`^        back to top        ^`](#unit-testing)**

## Creating test files

Lets say you have a file called `src/calc.mjs`, which is a utility file to give basic calculator functions to your code. (add, subtract, multiply, and divide)

calc.mjs

- add(num1, num2)
- sub(num1,num2)
- mult(num1, num2)
- div(num1, num2)

Create a `calc.test.mjs` file under `tests` folder. On the first line of this file import your calc.mjs file that you will be testing.

``` js
import { add, mult, sub, div } from '/src/calc.mjs';
```

**[`^        back to top        ^`](#unit-testing)**

## Creating tests






**[`^        back to top        ^`](#unit-testing)**
