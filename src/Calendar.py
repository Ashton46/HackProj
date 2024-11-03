import requests
from flask import Flask, jsonify, request
app = Flask(__name__)
@app.route ('https://api.peterportal.org/rest/v0/courses/all', methods=['GET'])
def get_courses():
    url = 'https://api.peterportal.org/rest/v0/courses/all'
    response = request.get(url)
    courses = response.json()
    return courses
if __name__ == '__main__':
    app.run(debug=True)

