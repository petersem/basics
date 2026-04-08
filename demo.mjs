const myArray = [1,2,3,4,5,6,7,8,9];

async function processArrayAsync(arr) {
    // arr.forEach(async (item) => { // does not support async operations
    for(const item of arr) {
        await someAsyncOperation(item);
        console.log(`Processed: ${item}`);
    };
}

function someAsyncOperation(item) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        },parseInt(item) * 500);
    });
}

processArrayAsync(myArray)
    .then(() => {
        console.log('All items processed');
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    });