# Unit Testing

Unit testing involves testing units of code so that functionality can be confirmed within the application. 

A unit testing framework offers both immediate and long-range benefits. In the short term, unit tests facilitate a quicker development process by allowing for automated testing. Over the long term, unit testing yields savings in labour costs because less debugging is needed for code changes or package updates.

Unit tests can be automated into the build pipeline so that they are run on checkin or push. This yields immediate feedback to the developer so that issues are found and fixed early.

- [Unit Testing](#unit-testing)
  - [Jest](#jest)
  - [Install Jest](#install-jest)
  - [Setup](#setup)
  - [Creating test files](#creating-test-files)
  - [Running tests](#running-tests)
  - [Creating tests](#creating-tests)
    - [Discrete tests](#discrete-tests)
    - [Grouping output](#grouping-output)
  - [Matchers](#matchers)
    - [toBe(n)](#toben)
    - [toEqual](#toequal)
    - [Truthiness](#truthiness)
    - [Numbers](#numbers)
    - [toMatch (or not.toMatch)](#tomatch-or-nottomatch)
    - [Arrays and iterables](#arrays-and-iterables)
    - [Exceptions](#exceptions)
  
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

Create a `calc.test.mjs` file under `tests` folder. 

> Each `*.test.mjs` file is considered a `test suite` which can have many included tests.

On the first line of this file, import your calc.mjs file that you will be testing.


``` js
import { add, mult, sub, div } from '/src/calc.mjs';
```

**[`^        back to top        ^`](#unit-testing)**

## Running tests

Now that you have a `test` script set up in `package.json`, you can run the test suites by running this command.

``` bash
npm run test
```

Right now, you won't see much as you haven't written any tests yet. But you will see a display that shows you test coverage. Coverage shows you a report for what code you have and do not have test cases written for. 

> You should aim for 100% coverage

| File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| ---       |---------|----------|---------|---------|-------------------|
| All files |      75 |       75 |      75 |      75 |                   |
| calc.mjs  |      75 |       75 |      75 |      75 | 57-60             |

More detailed coverage reports are created in the `/coverage` folder.

**[`^        back to top        ^`](#unit-testing)**

## Creating tests

### Discrete tests

Create tests use `expect` and `matches` to test values in different ways.

Calls the add function with two parameters and `expects` the return value `toBe` a specific result.

``` js
test('adds two positive numbers', () => {
  expect(add(2, 3)).toBe(5);
});
```

**[`^        back to top        ^`](#unit-testing)**

### Grouping output

Better yet, you can group tests under a `describe` tag, so you logical groupings in the output.

``` js
describe('Add function', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });
});
```

Yields this in the output.

``` console
 PASS  tests/calc.test.mjs
  Add function                                                                           
    √ adds two positive numbers (1 ms)                                                                              
    √ adds two negative numbers (1 ms)
```  

**[`^        back to top        ^`](#unit-testing)**

## Matchers

Jest uses `matchers` to test in different ways. There is an expectation (`expect`) of something to match something.

### toBe(n)

Matchs on `exact` equality

``` js
expect(2+2).toBe(4);
```

> Can also use `expect.not.toBe()`

**[`^        back to top        ^`](#unit-testing)**

### toEqual

Matches by `value` (including implicit values)

``` js
expect(1).toEqual(true);
```

> Can also use `expect.not.toEqual()`

**[`^        back to top        ^`](#unit-testing)**

### Truthiness

- toBeNull
- toBeUndefined
- toBeDefined
- toBeTruthy
- toBeFalsy

**[`^        back to top        ^`](#unit-testing)**

### Numbers

- toBe
- toEqual (equivalent to toBe for numbers)
- toBeGreaterThan
- toBeGreaterThanorEqual
- toBeLessThan
- toBeLessThanOrEqual
- toBeCloseTo (used for floating point comparison)

**[`^        back to top        ^`](#unit-testing)**

### toMatch (or not.toMatch)

Checks strings again regular expressions

``` js
expect('Hello world').toMatch('/world/');
```

**[`^        back to top        ^`](#unit-testing)**

### Arrays and iterables

``` js
expect(shoppingList).toContain('milk');
```

**[`^        back to top        ^`](#unit-testing)**

### Exceptions

To test for expected errors.

``` js
expect(() => aFunction().toThrow());
expect(() => aFunction().toThrow('/specific/))
expect(() => aFunction().toThrow('A specific error'))
```

**[`^        back to top        ^`](#unit-testing)**
