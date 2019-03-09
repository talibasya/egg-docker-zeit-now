# Run stateless docker containers

Start app `docker-compose up`.

But after restart project there are no uploaded file from previous session.

To keep files:

1. add volumes into `docker-compose.yml`:

    ```shell
            volumes:
        - appdata:/srv/uploads
    volumes:
    appdata:
    ```

2. remove app container: `docker-compose rm -f`
3. start app again
