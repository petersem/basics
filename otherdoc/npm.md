# NPM

Commands and packackes.

- [NPM](#npm)
  - [Commands](#commands)
  - [Useful NPM Packages](#useful-npm-packages)

[Return Home](/basics)

## Commands

- `npm init -y` initialises a node project and auto answers all questions *yes*. (Omit -y to go through questions)
- `npm i` will install any packages defined in the packages.json file
- `npm i packagename` to install a package from npm.com
- `npm i packagename --save-dev` to install a package as a development dependency only
- `npm uninstall packagename` to uninstall a package
- `npm upgrade` to update packages
- `npm install --production` will not install any dev dependencies, only production ones

> The package.json file is updated with dependancies for installed packages, and their versions
> 
> You can add ^ and ~ before numbers to enforce update policies
> - `^` Allows minor and patch updates
> - `~` Allows only patch updates

**[`^        back to top        ^`](#npm)**

## Useful NPM Packages

- [Nodemon](https://www.npmjs.com/package/nodemon) Automatically restarts the node application when file changes in the directory are detected.
- [AXIOS](https://www.npmjs.com/package/axios) Promise based HTTP client for the browser and node.js
- Crypto - Cryptography library (code to Node)
- [Jest](https://www.npmjs.com/package/jest) Javascript unit testing framework
- [Express](https://www.npmjs.com/package/express) Web framework for Node.js
- [Express-Validators](https://www.npmjs.com/package/express-validators) server-side data validator
- [Cors](https://www.npmjs.com/package/cors) Middleware for Express which tells browsers which origins can read responses from your server
- [Plex-API](https://www.npmjs.com/package/plex-api) Plex API client
- [Node-Ping](https://www.npmjs.com/package/node-ping) Ping library for Node
- [Image-size](https://www.npmjs.com/package/image-size) Get dimensions of any image file or buffer
- [Pkg](https://www.npmjs.com/package/pkg) Package your Node.js project into an executable
- [Awesome-Notifications](https://www.npmjs.com/package/awesome-notifications) JavaScript notifications library with enhanced async support
- [Swagger](https://www.npmjs.com/package/swagger) Provides tools for designing and building Swagger-compliant APIs
- [Chart.js](https://www.npmjs.com/package/chart.js) JavaScript charting for designers & developers
- [JSDoc](https://www.npmjs.com/package/jsdoc) An API documentation generator for JavaScript.

**[`^        back to top        ^`](#npm)**
