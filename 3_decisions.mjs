// Decisions: There are two main ways to evaluate criteria and choose what to do. 
// If-then-else and switch statements
// being that you dont want to assign a new value to your test variable, use the double == which is a comparison operator

// if-then-else - prints 1
let myChoice = 1;
if (myChoice == 0){
    console.log("You chose 0");
}
else if (myChoice == 1){ 
    console.log("You chose 1");
}
else {
    console.log("You chose something weird");
};

// switch - prints 0
myChoice = 0
switch (myChoice) {
    case 0:
        console.log("You chose 0");
        break;
    case 1:
        console.log("You chose 1");
        break;
    default:
        console.log("You chose something weird");
        break;
}

// Ternary operator - if true do this, else that.
let age = 19;
let text = (age < 18) ? "Minor" : "Adult";
console.log("Ternary: " + text);  // Will return 'Ternary: Adult'



