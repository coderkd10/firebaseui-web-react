#!/bin/sh

docker build -t rfb-example:build . -f Dockerfile.example
docker run -it --rm --publish 8000:8000 --name cont-example-1  rfb-example:build

# to ssh into the server run the following in a different terminal
# docker exec -it cont-example-1 /bin/bash
# [sudo] docker exec -u root -it cont-example-1 /bin/bash

# pull the built static bundle using
# docker cp cont-example-1:/home/node/app/example/public example/
