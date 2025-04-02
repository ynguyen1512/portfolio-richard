FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the project
COPY . .

# Build app (Next.js will be created .next folder)
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]