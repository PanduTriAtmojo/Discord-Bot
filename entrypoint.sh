#!/bin/sh

# Wait for Lavalink to start
java -jar Lavalink/Lavalink.jar &

sleep 20

# Start Node.js application
node src/index.js
