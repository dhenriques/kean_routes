from flask import Flask, request
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
CORS(app)


def results(origin, destination):
    json_string = """{
        "route": {
            "mapName": "Google Maps",
            "screenShotPath": "Google_Maps.png",
            "eta": "13 minutes",
            "distance": "5.9 miles",
            "route": "Morris Ave and US-22 W",
        }
        "route": {
            "mapName": "Waze",
            "screenShotPath": "Google_Maps.png",
            "eta": "13 minutes",
            "distance": "5.9 miles",
            "route": "Morris Ave and US-22 W",
        }
    }"""

    return json_string


@app.route('/', methods=['POST', 'GET'])
def route_query():
    print(request.args)
    origin = request.args['origin']
    destination = request.args['destination']

    print("origin: " + origin + " dst: " + destination)

    data = {}
    data['key'] = 'value'
    json_data = json.dumps(results(origin, destination))

    return ("%s(%s)" % (request.args.get('callback'), json_data))


if __name__ == '__main__':
    app.run(debug=True, port=8000)


