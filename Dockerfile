FROM node:22 AS development

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

ARG VITE_API_URL

RUN VITE_API_URL=${VITE_API_URL} npm run build


# Production Stage

FROM caddy:2 AS production

COPY --from=development /app/dist /srv

COPY Caddyfile /etc/caddy/Caddyfile
