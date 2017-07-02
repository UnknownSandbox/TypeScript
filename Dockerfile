FROM node

RUN npm install -g typescript yarn ts-node

CMD tail -f /etc/hosts