node -v
    v16.19.0



sudo service  nginx  stop
sudo apt-get remove --purge nginx nginx-common
sudo rm -rf /etc/nginx /var/log/nginx /var/cache/nginx
sudo apt-get update
sudo apt-get install nginx -y

sudo chmod +777 /etc/nginx/*/*