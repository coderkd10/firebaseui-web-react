#!/bin/sh

docker build -t firebaseui-web-react:build .
docker create --name extract firebaseui-web-react:build

# pull the built artifact
docker cp extract:/home/node/build.tar.gz .

# cleanup
docker rm -f extract

tar -xzvf build.tar.gz

rm build.tar.gz
