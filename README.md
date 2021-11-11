This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- The page will reload if you make edits.<br />
- You will also see any lint errors in the console.

----------------------------------------------

## Login & Registration

Local Server: https://github.com/techiediaries/fake-api-jwt-json-server 
Integrated to run the api

### `npm install`

To install the project on local
Open [http://localhost:8000] to view in the browser or to run localhost on 8000 port.

### `npm run start-auth`

Runs the command 
Helps to genrate auth tokens for:
Login: [http://localhost:8000/auth/login]
Register: [http://localhost:8000/auth/Register]

you can Login & Register to hit a POST request
with the following data below:

### `{ "email": "nilson@email.com", "password":"nilson" }`

--------------------------------

## Unit Testing With Jest

For the Unit Testing
install Jest using the following command below

### `$ npm install -save-dev jest`

After Installing Jest,
added following lines in package.json file -

{
 "scripts": {
  "test": "jest",
  "test:watch": "npm test -- --watch"
 }
}

Now, we can easily perform Unit Testing with JEST
