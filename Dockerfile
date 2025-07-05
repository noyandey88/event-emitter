# -------- Build Stage --------
FROM --platform=linux/amd64 node:20-alpine3.21 AS build

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY . .

RUN npm install
RUN npm run build

# -------- Production Stage --------
FROM nginx:alpine

# Clean default nginx static files (optional)
RUN rm -rf /usr/share/nginx/html/*

# Copy Vite build to nginx html dir
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for Render
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]