FROM fholzer/nginx-brotli:latest AS builder

ADD ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./build /usr/share/nginx/html
