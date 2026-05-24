FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npx tailwindcss -i ./public/css/input.css -o ./public/css/style.css

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]