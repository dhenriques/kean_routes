from flask import Flask, request
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET','POST'])
def route_query():
    print(request.args)
    origin = request.args['origin']
    destination = request.args['destination']

    print("origin: " + origin + " dst: " + destination)

    data = {}
    data['key'] = 'value'
    json_data = json.dumps(data) #upload

    return "%s(%s)" % (request.args.get('callback'),json_data)




if __name__ == '__main__':
    app.run(debug=True, port=8000)