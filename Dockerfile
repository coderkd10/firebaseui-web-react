ARG NODE_VERSION=14

FROM node:${NODE_VERSION} as builder

USER node
WORKDIR /home/node/app

# copy package.json and package-lock.json
COPY package*.json ./
RUN npm install

COPY --chown=node . ./

RUN npm run lint

RUN npm run clean \
    && npm run build

# pack will generate tarball with filename $name-$version.tgz
RUN  mkdir ../build \
    && npm pack --json ./dist > ../build/pack-log.json \
    && mv react-firebaseui-6.0.0.tgz ../build/
