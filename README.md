# FMP-X

This project tests learning outcomes of lean learning strategies in a practical application.

## Developers

### Install Local Dependencies

* Install Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
* Install NodeJS: https://nodejs.org/en/download/
* Install the Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
* Install Angular CLI: `npm install -g @angular/cli`
* Install nodemon: `npm install -g nodemon`
* Install local dependencies: `npm install`

### Run Application Locally

1. Create .env from Heroku config `heroku config -s -a fmp-x-stage | xargs > .env`
2. Update .env to your liking for local
2. Start api `npm run dev-api-serve`
3. Start web `npm run dev-web-serve`

### Run Unit Tests

* Test watch api `npm run dev-api-test`
* Test watch web `npm run dev-web-test`
* Run all tests once `npm test`

### Make Changes

1. Create a new branch `git branch -b "<branch-name>"`
2. Make changes to code
3. Add changes `git add .`
4. Commit changes `git commit -m "<meaningful commit message>"`
5. Push changes `git push origin <branch-name>`
6. Open a pull request into master and request a review
7. Confirm that all tests pass

