This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Node JS
    - Help to start & excute your react project at port 3000
    - run time environment where you can execute your javascript code

    - step:1 npm install -g create-react-app
    - step:2 create-react-app my-app
                                OR
    - step:1 npx create-react-app my-app
    - step to start/excute the project below
    - command: npm start 

----------------------------------

## npm & npx
    -Both are tools for setup react project

## npm v/s npx (Quick Difference)
    -npm * node package manager - depandency required to install globaly to setup project
    -npx * node package runner - Helps to setup/execute react project directly without installing any depandency

-----------------------------------

## Installation

In the project directory, you can run:

### `$ npm install`

To install all required dependencies for project.

### `$ npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- The page will reload if you make edits.<br />
- You will also see any lint errors in the console.

### `$ npm add react-router-dom`
 
Install react-router-dom to perform routing in the app.

### `$ npm install --save redux`

Install Redux to perform structure flow in the app, which helps to maintain the application state.

### `$ npm install axios`

Install the Axios library to make HTTP requests from node.js.

----------------------------------------------

## Login & Registration

Local Server: https://github.com/techiediaries/fake-api-jwt-json-server 
Integrated to run the api

### `$ npm install`

To install the project on local
Open [http://localhost:8000] to view in the browser or to run localhost on 8000 port.

### `$ npm run start-auth`

Runs the command 
Helps to genrate auth tokens for:
Login: [http://localhost:8000/auth/login]
Register: [http://localhost:8000/auth/Register]

you can Login & Register to hit a POST request
with the following data below:

```json
{
  "email": "nilson@email.com",
  "password":"nilson"
}
```

--------------------------------

## Run Test

### `npm run test`

To run the test case, you can run the following command

## Unit Testing With Jest

For the Unit Testing
install Jest using the following command below

### `$ npm install -save-dev jest`

After Installing Jest,
added following lines in package.json file -

```json
{
 "scripts": {
  "test": "jest",
  "test:watch": "npm test -- --watch"
 }
}
```

Now, we can easily perform Unit Testing with JEST
