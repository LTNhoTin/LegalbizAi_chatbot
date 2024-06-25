# Sử dụng Node.js image chính thức từ Docker Hub
FROM node:14

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép file package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép tất cả các file từ máy chủ vào container
COPY . .

# Build ứng dụng
RUN npm run build

# Cài đặt serve để phục vụ ứng dụng tĩnh
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Chạy ứng dụng
CMD ["serve", "-s", "dist"]
