from flask import Flask, request #import main Flask class and request object
#import gmapScraper as ml
#import bingMapScraper as m2
#import wazeScraper as m3
#import mapQuestScraper as m4
#import hereWeGoScraper as m5

app = Flask(__name__) #create the Flask app

@app.route('/scrape', methods=['GET'])
def query_example():
    return "Hello world!"

# @app.route('/scrapeRoutes', method=['POST'])
# def get_json():
#     req = request.get_json()

#     origin = req['origin']
#     destination = req['destination']

    #googleMapsData = m1.scrape(origin,dest)
    #bingMapsData = m2.scrape(origin,dest)
    #wazeData = m3.scrape(origin,dest)
    #mapQuestData = m4.scrape(origin,dest)
    #hereWeGoData = m5.scrape(origin,dest)

    #sort and organize results
    #embed in HTML for stylization with css ID from bulma or css file OR return all information as JSON and make React handle it
    #return that all
    #GGWP

# @app.route('/form-example', methods=['GET', 'POST']) #allow both GET and POST requests
# def form_example():
#     if request.method == 'POST': #this block is only entered when the form is submitted
#         language = request.form.get('language')
#         framework = request.form['framework']

#         return '''<h1>The language value is: {}</h1>
#                   <h1>The framework value is: {}</h1>'''.format(language, framework)

#     return '''<form method="POST">
#                   Language: <input type="text" name="language"><br>
#                   Framework: <input type="text" name="framework"><br>
#                   <input type="submit" value="Submit"><br>
#               </form>'''

# @app.route('/json-example', methods=['POST']) #GET requests will be blocked
# def json_example():
#     req_data = request.get_json()

#     language = req_data['language']
#     framework = req_data['framework']
#     python_version = req_data['version_info']['python'] #two keys are needed because of the nested object
#     example = req_data['examples'][0] #an index is needed because of the array
#     boolean_test = req_data['boolean_test']

#     return '''
#            The language value is: {}
#            The framework value is: {}
#            The Python version is: {}
#            The item at index 0 in the example list is: {}
#            The boolean value is: {}'''.format(language, framework, python_version, example, boolean_test)

if __name__ == '__main__':
    app.run(debug=True, port=5000) #run app in debug mode on port 5000