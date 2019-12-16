from flask import Flask, request
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
CORS(app)


def sampleResults():
    json_string = """{
      "0":{
         "mapName":"Google Maps",
         "screenShotPath":"Google_Maps.png",
         "eta":"13 minutes",
         "distance":"5.9 miles",
         "route":"Morris Ave and US-22 W",
         "url":""
      },
      "1":{
         "mapName":"Waze",
         "screenShotPath":"Waze.png",
         "eta":"14 minutes",
         "distance":"5.9 miles",
         "route":"Morris Ave and US-22 W"
      },
      "2":{
         "mapName":"Bing Maps",
         "screenShotPath":"Bing_Maps.png",
         "eta":"17 minutes",
         "distance":"5.5 miles",
         "route":"Morris Ave and US-22 W",
         "url":""
      },
      "3":{
         "mapName":"HERE WeGo",
         "screenShotPath":"HERE_WeGo.png",
         "eta":"15 minutes",
         "distance":"5.9 miles",
         "route":"Morris Ave and US-22 W",
         "url":""
      },
      "4":{
         "mapName":"MapQuest",
         "screenShotPath":"MapQuest.png",
         "eta":"13 minutes",
         "distance":"6.1 miles",
         "route":"Morris Ave and US-22 W",
         "url":""
      } 
}"""

    return json_string


@app.route('/', methods=['POST', 'GET'])
def route_query():
    print(request.args.to_dict())
    origin = request.args['origin']
    destination = request.args['destination']

    print("origin: " + origin + " dst: " + destination)

    data = {}
    data['key'] = 'value'
    json_data = json.dumps(sampleResults())

    return ("%s(%s)" % (request.args.get('callback'), json_data))


if __name__ == '__main__':
    app.run(debug=True, port=8000)


