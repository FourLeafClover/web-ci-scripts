FROM nginx
RUN mkdir /etc/nginx/html && rm -rf /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist/ /etc/nginx/html/
EXPOSE 80
