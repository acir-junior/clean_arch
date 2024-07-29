#!/bin/bash

rm -rf node_modules
rm -rf package-lock.json

npm install

chown -R 1000:1000 node_modules

npm run build

npm run dev