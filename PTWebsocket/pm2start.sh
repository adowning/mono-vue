#!/bin/sh
cd /home/ash/casino/PTWebSocket;
pm2 start Arcade.js --watch && pm2 start Server.js --watch && pm2 start Slots.js --watch &
cd ..;
pm2 start startsrv.sh;
exit 0



