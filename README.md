# Cephalopod Pub Entry

## Running the application (with Docker)

1. Run `npm install` in the client and server directories
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

## Deployments

1. `cd deployments/` and run `build.sh` file to generate a production build of React and move it to the backend's public directory.
2. TBC

