# Use Node.js base image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY app/package*.json ./
RUN npm install

# Copy app source code
COPY app .

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
