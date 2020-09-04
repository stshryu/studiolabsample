# studiolabsample
Skeleton framework for a full package NodeJS webserver and deployment train.

## Project Init
The project uses `docker` and `docker-compose` to build the necessary services to run and debug the project.
There are two Dockerfiles: `Dockerfile` and `Dockerfile.dev`. Compose uses Dockerfile.dev to ensure that the development environment is properly being spun up every time a dev needs to use it.

To get a working dev server run `docker-compose up --build` if you want to run it in detached mode add the `-d` flag to the end of the command.

## Project Development and Debugging
Once the containers are up and running, you should see two containers up and running, `database` runs the MongoDB container and `app` which is running the express server.

Logs will be output to the console, to a file under `logs/app.log`, and to a MongoDB Collection called `logs`. 

By default compose runs using `start.dev` npm process which should use nodemon to restart the server on change. After making a change and saving the project will restart.

## Testing
The npm startup script can be run using `npm run test`. If you want the tests to re-run on change you can instead use `npm run test.watch`. To get test coverage run `npm run test.coverage`.

## Deploying
`main.tf` exists as a terraform script that takes the contents of the docker container and pushes it to a specified AWS ECR instance. Future iterations should include a full task/service setup to automatically push to the repository, and create the node server.
