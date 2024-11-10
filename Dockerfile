# Step 1: Use an official Node image as the base
FROM node:20

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Build TypeScript files
RUN npx tsc

# Step 7: Expose the port that your application will run on
EXPOSE 3000

# Step 8: Start the application
CMD ["node", "dist/index.js"]