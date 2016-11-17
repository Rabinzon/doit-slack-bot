FROM mhart/alpine-node:6
WORKDIR /bot
ADD . /bot
RUN npm install
EXPOSE 3333
CMD ["npm", "start"]