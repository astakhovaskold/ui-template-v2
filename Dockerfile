FROM node:20.16.0-alpine AS builder
WORKDIR /app

ARG API_URL
ENV API_URL=$API_URL

ARG PORT
ENV PORT=$PORT

COPY . .
RUN corepack enable

RUN yarn install
RUN yarn build

FROM fholzer/nginx-brotli:latest

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
