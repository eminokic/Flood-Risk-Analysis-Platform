FROM gcr.io/cloud-builders/yarn as build
WORKDIR /frontend
COPY . .

RUN yarn install && yarn build

FROM nginx

COPY --from=build /frontend/nginx.conf /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build /frontend/build_configs.sh /docker-entrypoint.d/
RUN chmod +x /docker-entrypoint.d/build_configs.sh

COPY --from=build /frontend/build/ /var/www/html/


