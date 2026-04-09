const myArray = [1,2,3,4,5,6,7,8,9];

async function processArrayAsync(arr) {
    // arr.forEach(async (item) => { // does not support async operations
    for(const item of arr) {
        await someAsyncOperation(item);
        console.log(`Processed: ${item}`);
    };
    return 'array processed';
}

function someAsyncOperation(item) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        },parseInt(item) * 250);
    });
}

processArrayAsync(myArray)
    .then(() => {
        console.log('All items processed');
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    });

async function processParallel() {
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve) => {
        setTimeout(resolve,4000, 'foo');
    });

    Promise.all([promise1,promise2,promise3])
        .then((values) => {
            console.log(values);
        });
}

processParallel();