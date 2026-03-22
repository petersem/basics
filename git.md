# GIT

Git practices and commands

## Practices

- use a .gitignore file to implicity include or exclude files from Git
```
# Exclude the following folders and files from git
/node_modules
/config/*.json
/dist
/public/custom/pictures
/public/custom

# include this specifically
!/public/custom/custom.css

# Empty folders with only a .keep file are included.
!.keep

```

## Commands

### git init

Initialises a new Git repository in the current directory

``` command
$ mkdir railsapp  
$ cd railsapp  
$ git init
```

### git add

Adds state changes in the current director for staging

``` command
$ echo "README.md" >> ADE.md  
$ echo "app.rb" >> README.md  
$ git add README.md
```

### git push

Commit staged changes with a commit message

``` command
$ git add .  
$ git commit -m "Update files"  
$ git push origin main
```

### git branch

list branches, create branch, and switch to it

``` command
$ git branch  
$ git branch feature-login
```

### git fetch

Retrieve data from a remote repository without merging chnages

``` command
$ git remote add origin <url>
```

### git checkout

Switch to the specified branch

``` command
$ git checkout feature-login
```

### git merge

Merge the specified branch into the current branch

``` command
$ git checkout main  
$ git merge feature-login
```

### git reset

Reset the current branch to the specified commit

``` command
$ git log --oneline  
$ git reset --hard last-commit-hash
```

[Return to Home](https://github.com/petersem/basics)