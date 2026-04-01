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

- Nodemon
- AXIOS
- Crypto
- Jest
- Express, Express-Validators
- Plex-API
- Node-Ping
- Image-size
- Pkg
- Awesome-Notifications
- Swagger
- Chart.js

**[`^        back to top        ^`](#npm)**
