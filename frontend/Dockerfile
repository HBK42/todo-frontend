# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the frontend application
RUN npm run build

# Expose the port the app runs on
EXPOSE 80

# Serve the application
CMD ["npm", "start"]
