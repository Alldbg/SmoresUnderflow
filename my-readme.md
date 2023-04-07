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
