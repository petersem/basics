# Tips and tricks

Various tips and information, in no particular order.

### Cool VS Code Extensions

- **GitHub Pull Requests**
For integrating Git version control into VSCode.
- **CodeSnap-plus**
Creates snapshot images for select code
- **Dev Containers**
Lets you use a Docker container as a full-featured development environment.
- **Docker**
Makes it easy to build, manage, and deploy containerized applications
- **EJS Language Support**
Syntax highlighting for EJS files
- **JSDoc**
Documentation generator for JavaScript, TypeScript and Typescript/JavaScript
- **Live Server**
Launch a local development server with live reload feature for static & dynamic pages
- **Markdown All in One**
All you need for Markdown support and previews
- **Path Intellisense**
Plugin that autocompletes filenames
- **Remote - SSH**
lets you use any remote machine with a SSH server as your development environment
- **WakaTime for Visual Studio Code**
For metrics, insights, and time tracking automatically generated from your programming activity
- **YAML**
Provides comprehensive YAML Language support
- **Prettier - Code formatter**
Is an opinionated code formatter
- **ESLint**
Integrates ESLint JavaScript into VS Code

### Things you should learn about

- Docker - deploying containers and building Docker images
- Deploying Node JS projects
- Git and GitHub
- Markdown - [Cheatsheet here](https://www.markdownguide.org/cheat-sheet/)
- Typescript
- Dev Containers
- VSCode shortcut keys
- JS Classes
- JS Promises and Async/Await
- Nodemon
- Using environment variables

### VSCode

- `ctrl a k s` Will select all the code in your editor window and then reformat it nicely
- ``ctrl ` `` Opens a terminal window to your project folder
- `code .` from a terminal, opens VSCode to that folder
- `ctrl shift p` for VSCode command palette
- `ctrl =` zoom in
- `ctrl -` zoom out
- `shift alt` for block select with mouse
- `ctrl space` for intellisense
- `ctrl /` to comment / uncomment
- `f2` rename symbol
- `ctrl ,` opens VSCode settings
- Open settings and search for autosave in the search bar. Set autosave to `afterDelay` and autosavedelay to `3000`. (Saves files after 3 seconds of inactivitiy)

### Coding

- Don't be afraid to refactor. When you see something a bit *smelly*, and you have time, redo it.
- `npm i -y` initialises a node project and auto answers all questions *yes*. (Omit -y to go through questions)
- `npm i` will install any packages defined in the packages.json file
- `npm i packagename` to install a package from npm.com
- `npm i packagename --save-dev` to install a package as a development dependency only
- `npm uninstall packagename` to uninstall a package
- `npm upgrade` to update packages
- Express JS is used to handle HTTP logic
- Express middleware is a function which runs between the request and response.
- Practice coding by doing a simple app. Put it in GitHub and learn as you code. Start small!
- Don't use `let`, as this is for old browsers
- Use `const` unless you plan to change a variable, in which case use `let`
- JS file naming, use `.mjs` for module-based ES6 JS. If you use `JS` then you will have to set your package to use modules `type: module`
- Use the `AXIOS` library for HTTP calls from the server, and the JS built-in `FETCH` library for client side JS. (Axios has more features)

### HTTP Methods

| Method | Code | Purpose                |
| ------ | ---- | ---------------------- |
| GET    | 200  | Fetch data             |
| POST   | 201  | Create data            |
| PUT    | 200  | Update record          |
| PATCH  | 204  | Update partial record  |
| DELETE | 204  | Deleted record         |
| ERROR  | 40x  | Signifies client error |
| ERROR  | 500  | Signifies server error |

### Static Folders for HTML Projects

css
: stylesheet folder

img
: images folder

scripts
: Client-side javascript folder

fonts
: fonts folder

html
: html files, other than main index.html

[Return to Home](https://github.com/petersem/basics)