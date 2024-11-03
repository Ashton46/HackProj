import requests
from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/schedules', methods=['GET'])
def get_courses():
    url = 'https://api.peterportal.org/rest/v0/schedule/soc'
    term = request.args.get('term')
    department = request.args.get('department')
    courseNumber = request.args.get('courseNumber')
    params = {"term": term, "department": department, "courseNumber": courseNumber}
    response = requests.get(url, params=params)
    schedules = response.json()
    return schedules

if __name__ == '__main__':
    app.run(debug=True)
