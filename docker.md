# Docker

Various information on Docker

## Practices

- use a .dockerignore file to implicity include or exclude files from the docker image build
```
**/.dockerignore
**/.env
**/.git
**/.gitignore
**/.settings
**/.vs
**/.vscode
**/*.*proj.user
**/docker-compose*
**/compose*
**/Dockerfile*
**/node_modules
**/npm-debug.log
**/obj
**/secrets.dev.yaml
**/values.dev.yaml
README.md
/public/custom/pictures/**
**/custom.css
/scripts/**

!keep
```
- In VSCode, use `git create tag` with your version number, then `git push with tag` so that built docker images include tag (version) labelling.
  
## Commands

to be advised

## Yaml examples

### MariaDB (MySQL Equivalent DB)

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