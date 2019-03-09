# Scale Docker Horizontally with Nginx Load Balancing

Build image: `docker build -t app-nodejs .`

Let's start two js processes (servers):

1. `docker run -d -e "SERVER_NAME=chicken" --name=chicken app-nodejs`
2. `docker run -d -e "SERVER_NAME=steak" --name=steak app-nodejs`

Creation `nginx` folder...

Build `nginx` image: `docker build -t app-nginx .`

Run container: `docker run -d -p 8080:80 --link chicken --link steak app-nginx`