curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh) | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

nvm install 16.19.0
nvm exec 16.19.0  node --version
node -v


sudo service  nginx  stop
sudo apt-get remove --purge nginx nginx-common
sudo rm -rf /etc/nginx /var/log/nginx /var/cache/nginx
sudo apt-get update
sudo apt-get install nginx -y
sudo chmod +777 /etc/nginx/*/*

# copy your nginx config to 
code /etc/nginx/sites-enabled/default 
sudo service  nginx  start

sudo service kibana start



pm2 list
pm2 kill
pm2 log



# In gitpod, elasticsearch in fisrt place , generate this error  
# sysctl: setting key "vm.max_map_count", ignoring: Read-only file system
# but it work after some time, sinon use Docker
docker run -d  --name es01  -p 9200:9200 -it docker.elastic.co/elasticsearch/elasticsearch:7.17.9

sudo service elasticsearch start




sudo vi  /etc/elasticsearch/elasticsearch.yml
#
xpack.security.enabled: true
xpack.security.authc.api_key.enabled: true
#


 /usr/share/elasticsearch/bin/elasticsearch-setup-passwords interactive


 npm install -g redis-commander
 redis-commander
 


sudo rabbitmqctl add_user test test
sudo rabbitmqctl set_user_tags test administrator
sudo rabbitmqctl set_permissions -p / test ".*" ".*" ".*"
sudo rabbitmqctl change_password test test

sudo rabbitmq-plugins  enable rabbitmq_management

sudo service rabbitmq-server stop
sudo service rabbitmq-server start
# 15672-url