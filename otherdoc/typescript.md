# TypeScript

5tatically typed superset of JavaScript.

- [TypeScript](#typescript)
  - [Features](#features)
  - [Installation](#installation)
  - [Setup](#setup)

[Return Home](/)

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

**[`^        back to top        ^`](#typescript)**
