#!/bin/sh

docker build -t firebaseui-web-react:build .
docker create --name extract firebaseui-web-react:build

# pull the built artifact
docker cp extract:/home/node/build/react-firebaseui-6.0.0.tgz .

# cleanup
docker rm -f extract
