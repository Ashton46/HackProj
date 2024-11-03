import requests
from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/courses', methods=['GET'])
def get_courses():
    url = 'https://api.peterportal.org/rest/v0/courses/all'
    response = requests.get(url)
    courses = response.json()
    return courses

if __name__ == '__main__':
    app.run(debug=True)
