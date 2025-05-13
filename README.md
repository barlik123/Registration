# Registration - Fullstack application
## 1. UseCase: 
The Registration application is designed to be a component within larger web applications that require registration and accounts management.
This application allows:
* New users registrations for the website
* Returning users to login to the website
* admin users to manage the accounts (contacts) database.

## 2. Application structure:
The app include a backend written in python and a frontend in java, react, and css.
### Backend:
The backend is able to receive requests to create new contacts, update existing ones, delete contacts, and return details about the contacts.
The backend uses flask, flask_sqlalchemy, and flask_cors.
- flask_sqlalchemy provides an interface to interact with the contacts database 'mydatabase.db' that we use to maintain the contacts registrations.
- flask_cors enables us to receive and deal with requests from other origins (our frontend).

### Frontend: 
The frontend is divided into 3 main pages:
- root '/': for login and signups
- thanks '/Thanks': to inform the user that he successfully registered or signed-in.
- admin '/Admin': for admin maintances and insights into the contacts info.

The frontend uses react react-dom react-router-dom recharts.
- react is used to build a frontend web application interface for the app.
- react-dom and react-router-dom is used to have multiple sub-pages capabilities and navigate between them.
- recharts is used to display contacts details in a chart format for admin's insights.

## 3. Setup:
To be able to run the application you will need to first install several libraries for the frontend and backend.
### Backend:
```sh
pip install flask flask-sqlalchemy flask-cors 
```
### Frontend:
```sh 
npm install
```
```sh
npm install react react-dom react-router-dom recharts
```

## 4. How to run:
### Backend:
```sh
npm run dev
```
### Frontend:
```sh
python .\main.py
```

