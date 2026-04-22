# Docker

Various information on Docker

- [Docker](#docker)
  - [Practices](#practices)
  - [Commands](#commands)
  - [Multi-stage builds](#multi-stage-builds)
    - [Single stage build 1.7gb](#single-stage-build-17gb)
    - [Multi-stage build 295mb image](#multi-stage-build-295mb-image)
  - [Yaml examples](#yaml-examples)
    - [MariaDB (MySQL Equivalent DB)](#mariadb-mysql-equivalent-db)

[Return Home](/basics)

## Practices

- use a .dockerignore file to implicity include or exclude files from the docker image build

``` .ignore
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

**[`^        back to top        ^`](#docker)**

## Commands

- Create container: `docker compose up --no-start`
- Docker system disk free/reclaimable: `docker system df`
- Delete container: `docker rm container_name` *(must be stopped first)*
- Stop and remove container(s) in a compose.yaml file: `docker compose down -v [service_name]`
- Inspect a container: `docker inspect container_name`
- List all containers: `docker ps`
- List containers in formatted view: `docker ps -a --format "table {{.Names}}\t{{.ID}}\t{{.Status}}"`
- View container logs: `docker logs -f container_name`
- Clean all docker unused images and volumes `prune='docker system prune -a --volumes` (including stopped containers)
- Pull down new images, defined in a compose file: `docker compose pull [container_name]`
- Start a stopped container: `docker start`
- Start all stopped containers: `docker start $(docker ps -a -q)`
- Stop a container: `docker stop container_name`
- Stop all containers: `docker stop $(docker ps -a -q)`
- Create and start container(s) in a compose YAML file: `docker compose up -d service_name]`
- Pull a Docker image from registry: `docker pull repo/imagename[:tag]`

**[`^        back to top        ^`](#docker)**

## Multi-stage builds

Dramitically reduces the size of your Docker image. Do you think that storage is cheap, so it doesn't matter if a Docker image is big. So no big deal?
WRONG!
It's not the storage, but the time to deploy. This results in longer deployment times, scaling issues, and potential outages.
Use multi-stage builds and alpine.

### Single stage build 1.7gb

``` yaml
FROM node:25 
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "./src/server.mjs"]
```

### Multi-stage build 295mb image

``` yaml
# Stage 1: Base Node
FROM node:25-alpine AS base
WORKDIR /app

# Stage 2: Dependencies
FROM base AS dependencies
COPY package*.json ./
RUN npm install --omit=dev --only=production

# Stage 3: Copy files/Build
FROM dependencies AS build
WORKDIR /app
COPY src /app
# Build react/vue/angualr bundle static files
# RUN npm run build

# STAGE 4: Release with Alpine
FROM build AS release
WORKDIR /app
COPY --from=dependencies /app/package.json ./
RUN npm install --omit=dev --only=production
COPY --from=build /app ./
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node","server.mjs"]
```

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

**[`^        back to top        ^`](#docker)**
