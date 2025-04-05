from flask import request, jsonify
from config import app, db
from models import Contact
from werkzeug.security import generate_password_hash, check_password_hash

@app.route("/contacts", methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()
    
    # list comprehension to convert the list of Contact objects into a list of dictionaries
    # does not include the password field for security reasons
    json_contacts = [ 
        {"id": contact.id, "firstName": contact.first_name, "lastName": contact.last_name,\
             "email": contact.email, "location": contact.location, "isAdmin": contact.is_admin}
        for contact in contacts
    ]
    return jsonify({"contacts": json_contacts})

@app.route("/create_contact", methods=["POST"])
def create_contact():
    first_name = request.json.get("firstName")
    last_name = request.json.get("lastName")
    email = request.json.get("email")
    location = request.json.get("location")
    password = request.json.get("password")  
    is_admin = request.json.get("isAdmin", False)

    if not first_name or not last_name or not email or not password or not location:
        return (jsonify({"message": "you must provide all credentials"}), 400)

    hashed_password = generate_password_hash(password)  # Hash the password

    new_contact = Contact(first_name=first_name, last_name=last_name,\
         email=email, password=hashed_password, location=location, is_admin=is_admin)
    
    try:
        db.session.add(new_contact)
        db.session.commit()
    except Exception as e:
        return (jsonify({"message": "We encountered an issue processing your credentials. \nplease try again."}), 400)
    
    return (jsonify({"message": "contact created"}), 201)

@app.route("/update_contact/<int:user_id>",methods=["PATCH"])
def update_contact(user_id):
    contact = db.session.get(Contact, user_id)
    if not contact:
        return (jsonify({"message": "user not found"}), 404)
    
    data = request.json
    # Update the contact's attributes with the provided data if exists
    contact.first_name = data.get("firstName", contact.first_name)
    contact.last_name = data.get("lastName", contact.last_name)
    contact.email = data.get("email", contact.email)
    contact.location = data.get("location", contact.location)
    # Hash password if a new one is provided
    new_password = data.get("password")
    if new_password:
        contact.password = generate_password_hash(new_password)
    
    if "isAdmin" in data:
        contact.is_admin = data["isAdmin"]


    db.session.commit()

    return (jsonify({"message": "user updated."}), 200)

@app.route("/delete_contact/<int:user_id>", methods=["DELETE"])
def delete_contact(user_id):
    contact = db.session.get(Contact, user_id)
    if not contact:
        return (jsonify({"message": "user not found"}), 404)
    
    db.session.delete(contact)
    db.session.commit()

    return (jsonify({"message": "user deleted."}), 200)

@app.route("/login", methods=["POST"])
def login():
    email = request.json.get("email")
    password = request.json.get("password")

    #Filters by email to find the potential user more efficiently
    contact = Contact.query.filter_by(email=email).first()
    if not contact:
        return jsonify({"message": "User not found"}), 404

    # Checks the password
    if check_password_hash(contact.password, password):
        return jsonify({"message": "Login successful",\
                            "isAdmin": contact.is_admin}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

if __name__ == "__main__":
    with app.app_context():
        #db.drop_all()  # Deletes previous tables
        db.create_all()

    app.run(debug=True)