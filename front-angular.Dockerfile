FROM node:20-slim

COPY --chown=1000:1000 package*.json ./

RUN rm -rf node_modules && rm -rf package-lock.json

WORKDIR /home/angular/app

COPY . /home/angular/app/

RUN chmod +x /home/angular/app/.docker/start-front.sh

CMD [ "bash", "/home/angular/app/.docker/start-front.sh" ]

EXPOSE 4002