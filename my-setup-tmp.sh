sudo apt-get update
sudo apt-get install -y rabbitmq-server

curl -fsSL https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /usr/share/keyrings/elastic.gpg
echo "deb [signed-by=/usr/share/keyrings/elastic.gpg] https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list
sudo apt-get update
sudo apt install elasticsearch


ansible-playbook deployment/ansible.yml -i deployment/hosts
 
chmod +x ./scripts/*

./scripts/install.sh
./scripts/build.sh


# ansible-playbook config/ansible.yml 

