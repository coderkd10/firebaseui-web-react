ARG NODE_VERSION=18

FROM node:${NODE_VERSION} as builder

USER node
WORKDIR /home/node/app

# copy package.json and package-lock.json
COPY --chown=node package.json ./
RUN npm install
RUN npm install --save-dev --force babel-loader@^7 webpack-cli

COPY --chown=node . ./

RUN npm run clean \
    && npm run build

# generate asset for export
ARG OUT_DIRNAME=dd18_wp5_jsx_nolibname
RUN mkdir ../build \
    && cd ../build \
    && mkdir ${OUT_DIRNAME} \
    && cd ${OUT_DIRNAME} \
    && cp ../../app/dist/FirebaseAuth.js . \
    && cp ../../app/dist/StyledFirebaseAuth.js . \
    && cp ../../app/dist/index.js . \
    && cd ../.. \
    && tar -czvf build.tar.gz build/
