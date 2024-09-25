"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
@jwt_required()
def handle_hello():

    user = get_jwt_identity()

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/login', methods=["POST"])
def login():
    body= request.json
    user = User.query.filter_by(email = body["email"]).first()
    if not user:
        return jsonify({"msg": "Usuario o contraseña incorrecto"})
    access_token = create_access_token(identity=user.serialize())
    return jsonify ({"token":access_token})

@api.route('/register', methods=['POST'])
def register():
    body = request.json
    if not body.get("email") or not body.get("password"):
        return jsonify({"msg": "Faltan datos"}), 400
    if User.query.filter_by(email=body["email"]).first():
        return jsonify({"msg": "El usuario ya existe"}), 400
    try:
        new_user = User.create_user(email=body["email"], password=body["password"])
        return jsonify({"msg": "Usuario creado exitosamente"}), 201
    except Exception as e:
        return jsonify({"msg": str(e)}), 500

