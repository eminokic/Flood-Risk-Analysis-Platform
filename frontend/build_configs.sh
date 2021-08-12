#!/bin/bash

CONTENT="{
    proxy_set_header Host $DOMAIN;
    proxy_pass http://api-svc.$LIFECYCLE.svc;
}"

echo "location /api/ $CONTENT
location /admin/ $CONTENT
location /redirect/ $CONTENT
location /accounts/ $CONTENT" > /etc/nginx/conf.d/api.conf;

echo "window.API_URL = 'https://$DOMAIN/';
window.STATIC_BUCKET = '$STATIC_BUCKET';
window.LIFECYCLE = '$LIFECYCLE';" > /var/www/html/env.js
