FROM node:16

RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 3000

CMD ["node", "/home/app/index.js"]
