# TypeScript

5tatically typed superset of JavaScript.

- [TypeScript](#typescript)
  - [Features](#features)
  - [Installation](#installation)
  - [Setup](#setup)
  - [Examples](#examples)

[Return Home](/basics)

## Features

- Variables have a set type which is checked at compile time.
- Is compiled to JavaScript before it can be run in browsers or Node.js
- Now used by most JavaScript coders
- Adds extra syntaxc for type annotations, interfaces, and other features. 
- Many errors are caught at compile time, reducing runtime bugs.
- Excellent editor support with features like autocompletion, type checking, and refactoring tools.
- Requires learning some additional concepts over JavaScript, such as types and interfaces, but this leads to more robust code. 
- Large community support with increasing type definitions for third party frameworks and libraries.
- Uses all JavaScript libraries and code, but requires type definitions
- Requires a compile to JavaScript step, however this is only a small development overhead
- Code is easier to maintain and enhance due to type safety and better tooling. 

**[`^        back to top        ^`](#typescript)**

## Installation

Global package install for typescript, and tsc-watch monitor.

``` bash
npm i -g typescript
npm install --save-dev @types/node
```

**[`^        back to top        ^`](#typescript)**

## Setup

From your Node project folder, install the Node types definitions.

``` bash
npm install --save-dev @types/node
```

Create a `tsconfig.json` file by running `tsc -init`

Then set the following values: 

``` json
{
  "compilerOptions": {
    // File Layout 
    "rootDir": "./src",
    "outDir": "./dist",

    // Environment Settings
    "module": "esnext",
    "target": "es2025",
    "types": ["node"],
    
    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
  }
}
```

Modify your `package.json` file to add a new script command for monitoring, compiling, and running code. 

``` json
    "dev": "tsc-watch --onSuccess \"node dist/tsdemo.js\""
```

**[`^        back to top        ^`](#typescript)**

## Examples

Here are some TypeScript examples

``` typescript
// standard syntax
let firstName: string

for (let index:number = 0; index < 10; index++) {
    console.log(`item ${index}`);
}

// custom types
type increasement = "wanged" | "dewanged";
let i: increasement = "dewanged";

// enums
enum poop {
    NUMBER1,
    NUMBER2,
    NUMBER3
}
const bp: poop = poop.NUMBER2

// interfaces
interface iEnemy {
    race: string
    attack: number
    defence: number
}

// classes
class Wang implements iEnemy {
    race: string 
    attack: number
    private _defence: number = 1

    // getter
    get defence() {
        return this._defence
    }

    // setter
    set defence(def: number) {
        if(def < 1 || def > 10) throw new Error("Defence must be 1 to 10")
        this._defence = def
    }

    public constructor(attack:number, defence: number) {
        this.race = "Wangmonger"
        this.attack = attack
        this.defence = defence       
    }
}

const myEnemy = new Wang(10,10)

```

**[`^        back to top        ^`](#typescript)**
