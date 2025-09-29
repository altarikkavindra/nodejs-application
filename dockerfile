#menggunakan image node versi 20
FROM node:20
#menentukan directory kerja
WORKDIR /usr/src/app
#copy file package.json ke workdir
COPY package*.json ./
#install dependency
RUN npm install
#copy seluruh file dan folder ke workdir
COPY . .
#memberitahukan port yang digunakan aplikasi
EXPOSE 3000
#menjalankan npm start setiap container start
CMD ["npm", "start"]
