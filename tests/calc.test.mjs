import { add, mult, sub, div } from '/src/calc.mjs';

beforeAll(() => {
    //console.log('***** PRE-SUITE SETUP');
});

afterAll(() => {
    //console.log('***** POST-SUITE CLEANUP');
});

// Test pre jobs
beforeEach(() => {
    //console.log('***** PRE-TEST SETUP -', expect.getState().currentTestName);
});

// test post jobs
afterEach(() => {
    //console.log('***** POST-TEST CLEANUP -', expect.getState().currentTestName);
});

describe('add function', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('throws error if arguments are not numbers', () => {
    expect(() => add(2, '3')).toThrow('Both arguments must be numbers');
  });
});

describe('mult function', () => {
  test('multiplies two positive numbers', () => {
    expect(mult(2, 3)).toBe(6);
  });

  test('multiplies two negative numbers', () => {
    expect(mult(-2, -3)).toBe(6);
  });

  test('multiplies one positive and one negative number', () => {
    expect(mult(2, -3)).toBe(-6);
  });

  test('throws error if arguments are not numbers', () => {
    expect(() => mult(2, '3')).toThrow('Both arguments must be numbers');
  });

});


describe('sub function', () => {
  test('subtracts two positive numbers', () => {
    expect(sub(2, 3)).toBe(-1);
  });

  test('subtracts two negative numbers', () => {
    expect(sub(-2, -3)).toBe(1);
  });

  test('subtracts one positive and one negative number', () => {
    expect(sub(2, -3)).toBe(5);
  });


  test('throws error if arguments are not numbers', () => {
    expect(() => sub(2, '3')).toThrow('Both arguments must be numbers');
  });
});
