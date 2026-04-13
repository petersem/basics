const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

async function processArrayAsync(arr) {
    // arr.forEach(async (item) => { // does not support async operations
    for (const item of arr) {
        await someAsyncOperation(item);
        console.log(`Processed: ${item}`);
    };
    return 'array processed';
}

// function someAsyncOperation(item) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, parseInt(item) * 250);
//     });
// }

// processArrayAsync(myArray)
//     .then(() => {
//         console.log('All items processed');
//     })
//     .catch((error) => {
//         console.log(`Error: ${error}`);
//     });

async function processParallel() {
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve) => {
        setTimeout(resolve, 4000, 'foo');
    });

    Promise.all([promise1, promise2, promise3])
        .then((values) => {
            console.log(values);
        });
}

processParallel();




// generator function - retains context
function* infiniteCounter(prefix = 'id') {
    let cnt = 1;
    while (true) {
        yield `${prefix}-${cnt++}`;
    }
}

const userId = infiniteCounter('user');
const pageId = infiniteCounter('page');

console.log(userId.next().value);
console.log(userId.next().value);
console.log(pageId.next().value);
console.log(userId.next().value);
console.log(userId.next().value);
console.log(pageId.next().value);
console.log(pageId.next().value);
console.log(pageId.next().value);
console.log(userId.next().value);
console.log(pageId.next().value);
console.log(userId.next().value);
console.log(pageId.next().value);

function add(...intValues) {
    console.trace('add func');
    return intValues.reduce(getSum, 0);
}

// reducer function - takes an initialValue (total) and the current value
function getSum(total, currentValue) {
    return total + Math.round(currentValue);
}

console.log(add(1,2,3,4,5,6));