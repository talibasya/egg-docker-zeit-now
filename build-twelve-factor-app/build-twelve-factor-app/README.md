# Twelve-factor app with Docker

Build docker `docker build -t foo/bar:1.0 .`

After bundle has been built we use to run our build in deamon mode: `docker-compose up -d app`

Confirm the continious running: `docker ps`

`docker logs -f buildtwelvefactorapp_app_1`

Kill all containers: `docker kill $(docker ps -q)`