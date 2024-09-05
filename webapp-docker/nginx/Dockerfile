FROM nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./page-not-found.html /var/www/html/page-not-found.html
COPY ./ssl/ /etc/ssl/certs/nginx/
COPY ./includes/  /etc/nginx/includes/

EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
