# Deploy Web Apps with Zeit Now

## Deploy with zeit `now`

Install globally: `npm i -g now`
Easly way to deploy project by now: `cd node`, `now

## Deploy static assets

To build static files without `package.json`, `Dockerfile` or another guides you can simply launch `now`. And it builds automatically. (as `serve` but globally)
Alternative way to push the page: `now --static`

## Deploy docker project (with php file)

Go to `php` folder and run `now`. The command automatically identify Dockerfile and build image and container for php service.
That means `now` can deploy any type of code.

## Use `Now` to point a custom name to a specific deployment

Build one version of app. Than make little changes and build another copy. Now there are two different urls.
Create an `alias`: `now alias https://zeit-now-egghead-vigtytuxhl.now.sh  egghead-test-cource.now.sh`
Now we have new link: `https://egghead-test-cource.now.sh/` which point to your deploy.

Create new deployment and to make alias to point on works the same: `now alias #NEW_URL#  egghead-test-cource.now.sh`

## Configure secrects in environments variables

Start `now` with parameters: `now -e GREETING=EggHead`
Set multiple variables: `now -e GREETING=Hi -e NAME=World`

Add secret: `now secret add greeting HEYA`.
Now it's refers on your project. There is no another way to store your key.
`npm run deploy`, where `"deploy": "now -e GREETING=@greeting"`

## View source on your remote server

You have a build source on `now`. Go to source: `{yourlink}/_src/`

## Custom domain name

For payed account you get the list with dns servers

1. Write them in the domain setting page
2. `now` - deploy your project
3. `now alias [URL] [DOMAIN]` - point to you deploy

## Use a hosted database

Build simple app with database using knowledge gotten from lesson above.