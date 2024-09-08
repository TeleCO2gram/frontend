FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli

COPY . .

EXPOSE 4200

CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "4200"]