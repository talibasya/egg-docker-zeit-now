# Pipe Log Output to STDOUT with Docker

Complish the change, new instructions: `RUN ln -sf /dev/stdout /debug.log`

Build an image: `docker build -t foo .`

Run in deamon mode: `docker run -d --name=foo foo`

see logs: `docker logs -f foo`