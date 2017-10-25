FROM node:8.7-alpine

COPY ./app/ /app/
WORKDIR /app/
RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm"]
CMD ["start"]
