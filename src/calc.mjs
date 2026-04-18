/**
 * Add - Addition function 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} The sum of num1 and num2
 */
export function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return num1 + num2;
}

/**
 * Mult - Multiply function 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} The product of num1 and num2
 */
export function mult(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return num1 * num2;
}

/**
 * Sub
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} The num1 minus num2
 */
/**
 * Description placeholder
 *
 * @export
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} 
 */
export function sub
(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return num1 - num2;
}

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
export function div
(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return num1 / num2;
}

