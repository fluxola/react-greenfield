FROM ubuntu:latest as builder

USER root

WORKDIR /opt/src/

COPY package*.json /opt/src/

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_10.x  | bash -
RUN apt-get -y install nodejs


RUN npm install

COPY . /opt/src/

RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /opt/src/build/ /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]