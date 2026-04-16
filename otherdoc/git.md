# GIT

Git practices and commands

- [GIT](#git)
  - [General](#general)
    - [About](#about)
    - [Install](#install)
  - [Practices](#practices)
    - [Commmit messages](#commmit-messages)
    - [.GitIgnore](#gitignore)
  - [Commands](#commands)
    - [git init](#git-init)
    - [git add](#git-add)
    - [git status](#git-status)
    - [git log](#git-log)
    - [git remote](#git-remote)
    - [git commit](#git-commit)
    - [git push](#git-push)
    - [git pull](#git-pull)
    - [git branch](#git-branch)
    - [git fetch](#git-fetch)
    - [git checkout](#git-checkout)
    - [git merge](#git-merge)
    - [git reset](#git-reset)
    - [git clone](#git-clone)

[Return Home](/basics)

## General

### About

[Git](https://github.com/petersem/basics/raw/refs/heads/main/misc/Version-Control.pptx) presentation

**[`^        back to top        ^`](#git)**

### Install

[Install Git](https://github.com/git-for-windows/git/releases/download/v2.53.0.windows.3/Git-2.53.0.3-64-bit.exe)

[Create a GitHub account](https://github.com)

Configure Git for use with GitHub

``` bash
git config --global user.name "Your GitHub Username"
git config --global user.email “Your GitHub your.email@example.com"
```

Install GitHub [extension for VSCode](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)


**[`^        back to top        ^`](#git)**


## Practices

### Commmit messages

Good commit messages tell the clear story oof your changes. Use an imperative mood for messages. Treat them like they are describing a command. This aligns with how Git describes commits. 

Conventions for commit messages

- `feat: message` add a new feature
- `fix: message` patches a bug in the code
- `docs: message` updates for documentation
- `refactor: message` improve code without functional changes
- `chore: message` build tasks and maintenance

> Limit commit message to 50 characters. Be specific and direct.

**[`^        back to top        ^`](#git)**

### .GitIgnore

Use a .gitignore file to implicity include or exclude files from Git
  
``` bash
# exclude these
/node_modules
/config/*.json
/dist
/public/custom/pictures
/public/custom

# include this specifically
!/public/custom/custom.css

# Empty folders with only a .keep file are included. Good to retain folder structure
!.keep

```

**[`^        back to top        ^`](#git)**

## Commands

### git init

Initialises a new Git repository in the current directory

``` command
$ mkdir railsapp  
$ cd railsapp  
$ git init
```

**[`^        back to top        ^`](#git)**

### git add

Adds state changes in the current director for staging

``` command
$ echo "README.md" >> ADE.md  
$ echo "app.rb" >> README.md  
$ git add README.md
```

**[`^        back to top        ^`](#git)**

### git status

Shows the current state of your project

``` command
$ git status
```

**[`^        back to top        ^`](#git)**

### git log

Shows the the history of all commits made in your project

``` command
$ git log
```

**[`^        back to top        ^`](#git)**

### git remote

Links your local project to a remote repository like GitHub

``` command
$ git remote add origin https://github.com/username/projectname.git
```

**[`^        back to top        ^`](#git)**

### git commit

Commit staged changes with a commit message

``` command
$ git add .  
$ git commit -m "Update files"  
```

**[`^        back to top        ^`](#git)**

### git push

Push changes to a git repository

``` command
$ git push origin main/master
```

**[`^        back to top        ^`](#git)**

### git pull

Pulls the latest changes from the online repository to your local project

``` command
$ git pull
```

**[`^        back to top        ^`](#git)**

### git branch

list branches, create branch, and switch to it

``` command
$ git branch  
$ git branch feature-login
```

**[`^        back to top        ^`](#git)**

### git fetch

Retrieve data from a remote repository without merging chnages

``` command
$ git remote add origin <url>
```

**[`^        back to top        ^`](#git)**

### git checkout

Switch to the specified branch

``` command
$ git checkout feature-login
```

**[`^        back to top        ^`](#git)**

### git merge

Merge the specified branch into the current branch

``` command
$ git checkout main  
$ git merge feature-login
```

**[`^        back to top        ^`](#git)**

### git reset

Reset the current branch to the specified commit

``` command
$ git log --oneline  
$ git reset --hard last-commit-hash
```

**[`^        back to top        ^`](#git)**

### git clone

Copies an existing repository from GitHub to your local system

``` command
$ git clone https://github.com/username/project.git
```

**[`^        back to top        ^`](#git)**
