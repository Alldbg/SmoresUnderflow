#Mongo Installation
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -

sudo apt-get install gnupg

wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -


echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list


sudo apt-get update

sudo apt-get install -y mongodb-org

sudo service mongod start

sudo service mongod status
##

sudo pip3 install ansible

sudo apt-get update
sudo apt-get install -y rabbitmq-server

curl -fsSL https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /usr/share/keyrings/elastic.gpg
echo "deb [signed-by=/usr/share/keyrings/elastic.gpg] https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list
sudo apt-get update
sudo apt-get install -y  elasticsearch


ansible-playbook deployment/ansible.yml -i deployment/hosts
 
chmod +x ./scripts/*

./scripts/install.sh
./scripts/build.sh
./scripts/pm2init.sh

cd "/workspace/SmoresUnderflow/su-frontend"
npm install
npm run build

cd "/workspace/SmoresUnderflow/"

# ansible-playbook config/ansible.yml 
