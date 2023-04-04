#/bin/bash
killall redis-server


for port in 7000
do
        #cd "/home/ubuntu/clusters/$port"
        rm /workspace/SmoresUnderflow/redis-server.log
        redis-server /workspace/SmoresUnderflow/deployment/redis/redis.conf
done

ps -e | grep redis-server