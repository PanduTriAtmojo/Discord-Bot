#!/bin/sh

# Start Lavalink in the background
java -jar /usr/src/bot/Lavalink/Lavalink.jar &

# Wait for Lavalink to start
sleep 20

# Start Node.js application
node src/index.js
