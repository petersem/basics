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

# FROM node:25 
# WORKDIR /app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# ENV NODE_ENV=production
# EXPOSE 3000
# CMD ["node", "./src/server.mjs"]
