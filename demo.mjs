const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

async function processArrayAsync(arr) {
    // arr.forEach(async (item) => { // does not support async operations
    for (const item of arr) {
        await someAsyncOperation(item);
        console.log(`Processed: ${item}`);
    };
    return 'array processed';
}

function someAsyncOperation(item) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, parseInt(item) * 250);
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
        setTimeout(resolve, 4000, 'foo');
    });

    Promise.all([promise1, promise2, promise3])
        .then((values) => {
            console.log(values);
        });
}

processParallel();




// wrapper pattern to pass a variable in before the middleware is called. 
export const customMiddleware = function (action = "blah") {
    console.log(`Custom middleware: Activated - Mode: ${action}`);

    return (req, res, next) => {
        if (req.body != undefined) {
            switch (action.toLowerCase()) {
                // do something
                case "blah":
                    return res.setHeader('Content-Type', 'application/json').status(400).json({ message: something, status: "xxx" });
                    break;
                // if a bogus option was passed, show an error
                default:
                    res.status(500);
                    console.log(`Middleware (Mode: ${action}) You have NOT SELECTED A VALID OPTION - no action taken !!!`);
                    res.setHeader('Content-Type', 'application/json').status(500).json(`{message: middleware triggered, but using invalid option '${action}' - No action taken }`);
                    return;
                    break;
            }
        }
    }
    next();
}
