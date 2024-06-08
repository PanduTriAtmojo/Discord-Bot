# Menggunakan base image node dan bullseye
FROM node:18-bullseye

# Install dependencies untuk Lavalink dan tools untuk memeriksa port
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk wget net-tools && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

# Copy and Install our bot
COPY . .
RUN npm install && npm cache clean --force

ENV JAVA_TOOL_OPTIONS -Xmx1G

# Copy entrypoint script
COPY entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

# Start me!
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
