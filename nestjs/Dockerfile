FROM node:12.22.1
WORKDIR /root
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:test"]