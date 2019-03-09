# Ensure containers high availability

Build image: `docker build -t helloworld .`

Run container: `docker run --name test1 helloworld`

Show list: `docker ps -a -f name=test1`

Start another container: `docker run --restart allways --name test2 helloworld`

Create docker-compose and put alternative way:
`docker-compose up --scale helloworld=3`

Stop always containers:

```bash
docker stop $(docker ps -a -q) &
docker update --restart=no $(docker ps -a -q)
```