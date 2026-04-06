# JSDoc

Documenting you code with labels

- [JSDoc](#jsdoc)
  - [Installing](#installing)
  - [Configuration](#configuration)
    - [JSDoc config](#jsdoc-config)
    - [Package script](#package-script)
    - [Git ignore](#git-ignore)
  - [Creating documentation](#creating-documentation)
  
[Return Home](/basics)

## Installing

Install with the following command:

``` bash
npm i jsdoc --save-dev
```

**[`^        back to top        ^`](#jsdoc)**

## Configuration

In order for JSDoc to scan the required file types, we need a jsdoc config file.

### JSDoc config

Create a `jsdoc.conf.json` file in the root of your project, then populate it with the following:

``` json
{
  "source": {
    "include": ["src"],
    "includePattern": ".+\\.(m?js(doc|x)?|cjs|ts)$",
    "excludePattern": "(^|\\/|\\\\)_"
  },
  "plugins": [],
  "opts": {
    "encoding": "utf8",
    "destination": "./docs",
    "recurse": true,
    "verbose": true
  }
}
```

**[`^        back to top        ^`](#jsdoc)**

### Package script

Edit your `package.json` file and add the following to the scripts section:

`"doc": "cls && node ./node_modules/jsdoc/jsdoc.js -c ./jsdoc.conf.json"`

You can now create JSDocs with `npm run doc`

**[`^        back to top        ^`](#jsdoc)**

### Git ignore

Edit your `.gitignore` file and add a line to ignore dynamically created doco. 

`/docs`

**[`^        back to top        ^`](#jsdoc)**

## Creating documentation

Create documentation by running the following command:

`npm run doc`

This will create a /docs folder with html documentation.

**[`^        back to top        ^`](#jsdoc)**

