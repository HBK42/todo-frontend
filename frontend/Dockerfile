# Stage 1: Build the application
FROM node:16 AS build

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy source code and build the application
COPY . .
RUN yarn build

# Stage 2: Serve the application using nginx
FROM nginx:alpine

# Copy the build output to nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port nginx is running on
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
