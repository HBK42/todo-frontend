# Use Node.js LTS version
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files and build the app
COPY . .
RUN npm run build

# Expose and serve the app
EXPOSE 5000
CMD [ "npx", "vite", "preview", "--host" ]
