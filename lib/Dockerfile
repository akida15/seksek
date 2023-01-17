FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/akida15/seksek /root/akida15
WORKDIR /root/akida15/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
