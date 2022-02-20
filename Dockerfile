FROM node:16.14.0-buster-slim
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . .
RUN npm install
CMD ["npm", "run", "serve"]
