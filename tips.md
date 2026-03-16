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
- **Thunder Client**
Rest API tester (But, I prefer stand-alone Postman)

### Things you should learn about

- Docker - deploying containers and building Docker images
- Deploying Node JS projects
- Git and GitHub - [Presentation](https://github.com/petersem/basics/raw/refs/heads/main/misc/Version-Control.pptx)
- Markdown - [Cheatsheet here](https://www.markdownguide.org/cheat-sheet/)
- Typescript
- Dev Containers
- VSCode shortcut keys
- JS Classes
- JS Promises and Async/Await
- Nodemon - dev node restarts
- Jest - unit testing
- Using environment variables
- Learn a few regular expression basics - [regex testing](https://regex101.com/)
- Font Awesome
- [Idempotence](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent)
-  [S.O.L.I.D](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design) Design principles for better software architecture
- AXIOS
- Secure Coding Practices
- SCRUM and Kanban Agile methodologies

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

### Useful Books

- The Pragmatic Programmer: From Journeyman to Master
- Design Patterns
- Clean Code: A Handbook of Agile Software Craftsmanship
- The Clean Coder: A Code of Conduct for Professional Programmers
- Clean Architecture
- Software Estimation - Demystifying the black art
- Agile Software Development, Principles, Patterns, and Practices

### Useful links

- Google Javascript [style guide](https://google.github.io/styleguide/jsguide.html)
- Mozilla Development Network [JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TLDR](https://tldr.tech/)
- [Draw.IO](https://draw.io) general purpose diagram tool
- [Wireframe.cc](https://wireframe.cc) wireframe tool
- [OWASP Top 10](https://owasp.org/Top10/2025/)
- [Regular Expressions 101](https://regex101.com/)
- [Database naming standards](https://dev.to/ovid/database-naming-standards-2061)
- [W3Schools](https://www.w3schools.com/w3css/) CSS reference
- [NPM Package Library](https://www.npmjs.com/)

### NPM

- `npm i -y` initialises a node project and auto answers all questions *yes*. (Omit -y to go through questions)
- `npm i` will install any packages defined in the packages.json file
- `npm i packagename` to install a package from npm.com
- `npm i packagename --save-dev` to install a package as a development dependency only
- `npm uninstall packagename` to uninstall a package
- `npm upgrade` to update packages

### Coding

#### General

- Don't use `let`, as this is for old browsers
- Use `const` unless you plan to change a variable, in which case use `let`
- JS file naming, use `.mjs` for module-based ES6 JS. If you use `JS` then you will have to set your package to use modules `type: module`
- Use the `AXIOS` library for HTTP calls from the server, and the JS built-in `FETCH` library for client side JS. (Axios has more features)
- Check input data accuracy by validating inputs (eg. regular expression or other checks) This is checking the integrity of data, not checking for security issues. 
- Return appropriate status codes and error message for API calls
- Use the `HE` (NPM JS) library for encoding inputs and escaping output

#### Express

- Express JS is used to handle HTTP logic
- Express middleware is a function which runs between the request and response.

#### Secure Coding

- *Always* sanitise inputs at the server and client
- *Always* parse outputs. This includes reads and writes from databases and external services, too.
- *Try* to log important operations fopr security and debugging
- *Never* output a stack trace in production


#### Practices

- Practice coding by doing a simple app. Put it in GitHub and learn as you code. Start small!
- Don't be afraid to refactor. When you see something a bit *smelly*, and you have time, redo it.
- Are your functions doing only one thing? If not, seperate concerns and refactor
- Every database table should have a primary key
- Always implement appropriate error handling (try-catch) for any operation with a posibility of failure.
- Write unit tests *FIRST*, before you write your code
- Document code appropriately. Classes, functions, and then anything that is worth explaining. Don't add comments for the sake of commenting
- If you have to code a manual operation more than once in your code, put it in a seperate function of class
- Optimised code is great for efficiency, but can be bad for readability. Be efficient, but also keep things simple when it makes sense.

### HTTP Methods

| Method | Code | Purpose                |
| ------ | ---- | ---------------------- |
| GET    | 200  | Fetch data             |
| POST   | 201  | Create data            |
| PUT    | 200  | Update record          |
| PATCH  | 204  | Update partial record  |
| DELETE | 204  | Deleted record         |
| ERROR  | 400  | Bad request            |
| ERROR  | 500  | Signifies server error |

> #### Examlples
>
> | Code | Implementation                                       |
> | ---  | ---                                                  |
> | 200  | Get record or record                                 |
> | 200  | Full record updated                                  |
> | 201  | Record added                                         |
> | 204  | Partial record update completed (No content returned)|
> | 204  | Record deleted (No content returned)                 |
> | 400  | Rejected API call - missing required header          |
> | 409  | Rejected API call - Operation in progress            |
> | 422  | Rejected API call - Invalid header/data sent         |
> | 404  | Record not found                                     |
> | 500  | Internal server error                                |
> | 202  | Request received for processing, but not completed   |
> | 401  | Unauthorised request                                 |
> | 408  | Request timeout                                      |
> | 503  | Service / Server unavailable (e.g maintenance)       |

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

### Model - View - Controller (MVC) Pattern
Can be server or client, or both.

**Model**
: Data that is required to populate a page or control (partial)

**View**
: The page, or partial page, which will display the information. (Often EJS)

**Controller**
: Needed to render model data to a view, or partial. Which handles any API calls for CRUD or to external sites, and for managing any dynamic functionality on the web page.

### Docker

#### MariaDB (MySQL Equivalent DB)

``` yaml
services:
  mariadb:
    image: lscr.io/linuxserver/mariadb:latest
    container_name: mariadb
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
      - MYSQL_ROOT_PASSWORD=rootymctooty
      - MYSQL_DATABASE=mydb
      - MYSQL_USER=petersem
      - MYSQL_PASSWORD=Xyzzy2026!
    volumes:
      - c://docker/mariadb//config:/config
    ports:
      - 3306:3306
    restart: unless-stopped
```

[Return to Home](https://github.com/petersem/basics)