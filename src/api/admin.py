  
import os
from flask import Flask
from flask_admin import Admin
from .models import db, User
from flask_admin.contrib.sqla import ModelView
from flask_jwt_extended import JWTManager


def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'your_default_jwt_secret_key')
    app.config['JWT_TOKEN_LOCATION'] = ['headers']  # Where to look for the JWT token
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'

     # Initialize the JWT Manager
    jwt = JWTManager(app)

    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))

app = Flask(__name__)
setup_admin(app)