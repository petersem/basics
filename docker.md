# Docker

Various information on Docker

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