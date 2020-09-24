# COVID Entry

## Running the application (with Docker)

1. Run `sh bin/install.sh` to install dependencies
2. Run `docker-compose up`in the root directory of the project
3. You'll likely see an error similar to `Node Sass could not find a binding for your current environment: Linux 64-bit with Node.js x.x`. To solve this issue, open up a new window in your terminal and run `docker ps` to find the container id of container. Once you have the ID, run `docker exec -it [container-id] bash` to SSH into your client container. Run `npm rebuild node-sass` to fix the issue and update your bindings, make a small adjustment to the frontend code to trigger the hot reload and you should see a `Compiled successfully!` message.

## Running the application (without Docker)

If you are running the front and backend without Docker, ensure that you have `.env` files in the client and server directories. An example can be found in the `.env.example` files.

### Frontend

1. `npm install`
2. `npm start`

### Backend

1. `npm install`
2. `npm run start:dev`

## Migrations

1. Run your containers with `docker-compose.yml` (Note: Only needed when running with Docker containers).
2. Change to the database directory with `cd database`.
3. Temporarily update the `database/config/config.js` with your database credentials (you need to switch them back to the environment variables when you are finished with migrations).
4. Create the model file for the table with `npx sequelize-cli model:generate --name [model-name] --attributes [attribute-name]:[attribute-type]`.
5. This will create a model file and migration file. Edit the two files to represent what the table and attributes will be.
6. Run `npx sequelize-cli db:migrate` to run the database migrations. `npx sequelize-clie db:migrate:undo` will revert the migrations.

## Deployments

1. `cd deployments/` and run `build-fe.sh` file to generate a production build of React and move it to the backend's public directory.
2. TBC
