# Step 1: Set the base image to a Node.js image
FROM node:16-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Step 4: Install the project dependencies
RUN npm install
# OR if you use Yarn
# RUN yarn install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Build the Svelte application for production
RUN npm run build
# OR if you use Yarn
# RUN yarn build

# Step 7: Expose the port the app will run on
EXPOSE 5000

# Step 8: Command to run the app when the container starts
CMD ["npm", "run", "dev"]
# OR if you use Yarn
# CMD ["yarn", "dev"]
