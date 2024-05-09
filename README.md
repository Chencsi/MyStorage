# MyStorage

## Setup
- Create a .env file in the same directory with the required environment variables.
- Run `docker-compose up -d` in the terminal to start the services in detached mode.
## Servicess
- mysqldb: A MySQL database service using the mysql:5.7 image.
- backend: The backend API service, built from the ./backend directory.
- frontend: The frontend Angular application, built from the ./frontend directory.

## Configuration
### Environment Variables
The .env file contains the following environment variables:

|VARIABLE_NAME|DESCRIPTION|
|-------------|-----------|
|MYSQLDB_USER | The MySQL database username.|
|MYSQLDB_ROOT_PASSWORD | The MySQL root password.|
|MYSQLDB_DATABASE | The name of the MySQL database.
|MYSQLDB_LOCAL_PORT | The local port for the MySQL database.
|MYSQLDB_DOCKER_PORT | The Docker port for the MySQL database.
|API_LOCAL_PORT | The local port for the API service.
|API_DOCKER_PORT | The Docker port for the API service.
|ANGULAR_LOCAL_PORT | The local port for the Angular application.
|ANGULAR_DOCKER_PORT | The Docker port for the Angular application.

## Cleanup
To stop and remove the containers, networks, and volumes defined in this file, run:

`docker-compose down`