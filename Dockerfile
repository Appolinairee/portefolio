FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=1024"
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app ./
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
EXPOSE 3000
CMD ["npm", "start"]