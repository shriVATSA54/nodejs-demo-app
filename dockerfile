# Dockerfile
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all app files
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD [ "npm", "start" ]
