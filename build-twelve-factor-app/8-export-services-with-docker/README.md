# Export Services with Docker Port Building

Build docker image: `docker build -t foo .`

Run: `docker run -d foo`

Trying access: `curl localhost:8000` failed.

To open access for container: `docker run -d -p 8001:8000 foo`
Access thought `curl localhost:8001` is successfull.

Using compose you can do the same thing (see in the file)

Launch via docker-compose: `docker-compose up -d`