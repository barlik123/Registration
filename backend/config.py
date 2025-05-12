from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__) # Initialize Flask app
CORS(app) 

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db" # SQLite database URI
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False # Disable track modifications to save memory

db = SQLAlchemy(app) # Initialize the database
