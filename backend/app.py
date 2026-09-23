# imports
import os
import requests
from supabase import create_client
import json
from dotenv import load_dotenv

from flask import Flask, jsonify, request

app = Flask(__name__)

supabase = create_client(os.getenv('SUPABASE_URL'), os.getenv('SUPABASE_SECRET_KEY'))
from flask_cors import CORS
CORS(app)


# routes
@app.route('/')
def index():
    return "This works dw"


@app.route('/db/supabase', methods=["POST"])
def postto_db():


    payload = request.get_json()
    location = payload.get("location")

    response = (supabase.table('Search Results').upsert(
        {"location": location},
        on_conflict="location"
        ).execute())
    return jsonify(response.data), 201


@app.route('/db/supabase', methods=["GET"])
def readfrom_db():

    response = supabase.table('Search Results').select('*').execute()
    return jsonify(response.data)




if __name__ == '__main__':
    app.run(host="0.0.0.0", port=4148, debug=True)