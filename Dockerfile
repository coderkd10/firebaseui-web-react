ARG NODE_VERSION=16

FROM node:${NODE_VERSION} as builder
USER node
WORKDIR /home/node/app

# copy package.json and package-lock.json
COPY package*.json ./
RUN npm install

# copy files required for npm run build
COPY .babelrc webpack.config.js README.md LICENSE ./
COPY src ./src
COPY types ./types

RUN npm run build

# pack will generate tarball with filename $name-$version.tgz
RUN  mkdir ../build \
    && npm pack --json --pack-destination ../build ./dist > ../build/pack-log.json
