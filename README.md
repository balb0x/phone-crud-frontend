# Phone CRUD Frontend

This repository contains the source code of the React App which exposes a web application with the ability to view/create/modify/delete entries of phones and phone brands. 

The React app is a `React Admin` template, modified to comply the requirements of the project. It contains 2 Resources (`phone.js` and `brand.js`) which are in charge of the record interaction.

The data provider connects these resources with the backend. 

The auth provider prevents the user to view the web application without login first, redirecting all the Forbidden or Unauthorized responses from the backend to the login page.

### Deployment

The project has been configured to run in a docker image. To build the image, first execute this line on the cmd:

```
docker build -t phone-crud-frontend .
```

Then, to run the image:

```
docker run -p 3000:3000 phone-crud-frontend
```

### Build

Also, if you want to build the application yourself, you can install the npm modules and the serve it:

```
npm install
npm run serve
```