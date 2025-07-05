FROM node:20-alpine3.21

WORKDIR /app

COPY  package*.json .
COPY tsconfig*.json .

RUN npm install

COPY . .

RUN npm run build

# Serve build with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 5173

# CMD [ "npm", "run", "dev" ]
CMD ["nginx", "-g", "daemon off;"]