# Phone CRUD Frontend [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


This repository contains the source code of the React App which exposes a web application with the ability to view/create/modify/delete entries of phones and phone brands. 

The React app is a `React Admin` template, modified to comply the requirements of the project. It contains 2 Resources (`phone.js` and `brand.js`) which are in charge of the record interaction.

The data provider connects these resources with the backend. 

The auth provider prevents the user to view the web application without login first, redirecting all the Forbidden or Unauthorized responses from the backend to the login page.

The dashboard view presents a weather component, showing the forecast of Madrid. The information is retrieved from `https://openweathermap.org/` and it is presented by the npm library:
[react-open-weather](https://www.npmjs.com/package/react-open-weather)

You can find more detailed information on the project [Wiki](https://github.com/balb0x/phone-crud-frontend/wiki)

### Configuration

On the root folder, edit the `.env` to configure the project properties:

```
#Api key from https://openweathermap.org/
REACT_APP_WEATHER_API_KEY={OPENWEATHER_API_KEY}

#Path of the backend enpoints
REACT_APP_BACKEND_URL=http://127.0.0.1:5000/api
```


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

Also, if you want to build the application yourself, you can install the npm modules and then serve it:

```
npm install
npm run serve
```

### License

Phone CRUD Frontend is [MIT licensed](./LICENSE)