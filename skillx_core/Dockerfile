# --- BUILD STAGE ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the entire Next.js project
COPY . .

# Build the Next.js application
RUN yarn build

# --- PRODUCTION STAGE ---
FROM node:20-alpine AS production

WORKDIR /app

# Set environment variables
ENV NODE_ENV=production

# Copy only the .next folder from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Expose the port your app runs on (default: 3000)
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "start"]