let myName: string = "joe";

function capitialise(word: string): string {
    return word.at(0)?.toUpperCase() + 
    word.toLocaleLowerCase().slice(1);
}

console.log(capitialise(myName));