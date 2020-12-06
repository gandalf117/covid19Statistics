### To run the application in production mode:

# needs to be build in development

# installs a local server
npm install -g serve

# runs the application
serve -s dist

# follow the link in the console (http://localhost:5000/#/)

### To run the application in development mode:

# please use a later npm version (node v13+)
nvm use v14.4.0

# install command line interface for vue
npm install -g @vue/cli

# install all the dependencies
npm install

# runs the application
npm run serve-dev

# follow the link in the console (http://localhost:8085/#/)

# To build the application
npm run build
