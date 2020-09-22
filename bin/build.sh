# Remove the previous public folder in the server
rm -rf ../server/public

# Change directory to the client and run the build command
cd ../client
npm run build

# Move the production build to the server side
mv build ../server/public
