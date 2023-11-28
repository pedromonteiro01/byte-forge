# Stage 1: build the React application
FROM node:latest as build
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
COPY . /app
RUN yarn build

# Stage 2: serve the React application from Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]