FROM node:15.2.1

WORKDIR /cat

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

# CMD ["npm", "start"]
ENTRYPOINT ls -I node_module* / && npm start