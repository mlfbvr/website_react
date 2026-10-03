FROM node:24-alpine AS builder

ARG BUILD_MODE=demo
ENV VITE_MODE=${BUILD_MODE}

RUN npm install -g pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
RUN echo "Building for ${VITE_MODE}"
COPY . .
RUN pnpm build --mode ${VITE_MODE}

FROM nginx:alpine AS runner

WORKDIR /usr/share/nginx/html/
COPY --from=builder /app/dist/ ./

