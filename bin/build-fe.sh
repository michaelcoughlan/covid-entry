# Remove the previous public folder in the server
rm -rf ../server/public

# Change directory to the client and run the script for the production build
cd ../client
npm run build

# Move the production build to the server side
mv build ../server/public