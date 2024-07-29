FROM node:20-slim

COPY --chown=1000:1000 package*.json ./

WORKDIR /home/react/app

COPY ./src/infra/frontends/react/package*.json ./

RUN chmod +x /home/react/app/.docker/start-front.sh

CMD [ "bash", "/home/react/app/.docker/start-front.sh" ]

EXPOSE 4001