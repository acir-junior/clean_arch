FROM node:20-slim

COPY --chown=1000:1000 package*.json ./

RUN rm -rf node_modules && rm -rf package-lock.json

WORKDIR /home/react/app

COPY . /home/react/app/

RUN chmod +x /home/react/app/.docker/start-front.sh

CMD [ "bash", "/home/react/app/.docker/start-front.sh" ]

EXPOSE 4001