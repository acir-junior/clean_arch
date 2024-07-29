FROM node:20-slim

COPY --chown=1000:1000 package*.json ./

WORKDIR /home/angular/app

COPY ./src/infra/frontends/angular/package*.json ./

RUN chmod +x /home/angular/app/.docker/start-front.sh

CMD [ "bash", "/home/angular/app/.docker/start-front.sh" ]

EXPOSE 4002