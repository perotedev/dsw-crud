#!/bin/bash

cd /home/node/app

# instala as dependencias npm na raiz do app
npm install

# instala o mogoose
npm install --save @nestjs/mongoose mongoose

npm run start:prod
