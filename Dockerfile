FROM nginx:alpine

COPY site/dist/ /usr/share/nginx/html/

EXPOSE 80
