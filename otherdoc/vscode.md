# Visual Studio Code

- [Visual Studio Code](#visual-studio-code)
  - [Cool VS Code Extensions](#cool-vs-code-extensions)
  - [Shortcut keys](#shortcut-keys)
  - [Issues](#issues)
    - [Mouse pointer dissapears](#mouse-pointer-dissapears)

[Return Home](/basics)

## Cool VS Code Extensions

- [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) For integrating Git version control into VSCode.
- [CodeSnap-plus](https://marketplace.visualstudio.com/items?itemName=huibizhang.codesnap-plus) Creates snapshot images for selected code
- [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) Lets you use a Docker container as a full-featured development environment.
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) Makes it easy to build, manage, and deploy containerized applications
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
- **Filetree Pro**
Generate project file trees in markdown

**[`^        back to top        ^`](#visual-studio-code)**

## Shortcut keys

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
- `alt-shift` allows selecting multiple lines within the editor to simultaneously change
- Open settings and search for autosave in the search bar. Set autosave to `afterDelay` and autosavedelay to `3000`. (Saves files after 3 seconds of inactivitiy)

**[`^        back to top        ^`](#visual-studio-code)**

## Issues

### Mouse pointer dissapears

Mouse pointer almost dissapears in coding widows, using dark-mode themes, and when using AMD GPUs

- `ctrl-shift-p` to open the VSCode command palette
- Type in `Preferences: Configure Runtime Arguments
- Disable hardware accelleration
  
``` settings
// fix for dark cursor in editor on AMD GPUs
"disable-hardware-acceleration": true
```

- save file and restart VSCode

**[`^        back to top        ^`](#visual-studio-code)**
