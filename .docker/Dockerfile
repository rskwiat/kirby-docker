FROM php:7.1.8-apache

COPY . /app/html
COPY .docker/vhost.conf /etc/apache2/sites-available/000-default.conf

RUN chown -R www-data:www-data /app/html && a2enmod rewrite