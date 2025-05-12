from config import db
from datetime import datetime

# The model for the Contact table in the database.
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80),unique=False, nullable=False)
    last_name = db.Column(db.String(80),unique=False, nullable=False)
    email = db.Column(db.String(120),unique=True, nullable=False)
    location = db.Column(db.String(80),unique=False, nullable=False)
    password = db.Column(db.String(256), nullable=False) 
    is_admin = db.Column(db.Boolean,unique=False, nullable=False) 
    time_created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow) # Default value is the current UTC time

    # Builds the contact's fields into a dictionary to be turned into JSON
    def to_json(self):
        return {
            "id": self.id,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "email": self.email,
            "location": self.location,
            "isAdmin": self.is_admin,
            "timeCreated": self.created_at.isoformat()  # ISO 8601 format
        }