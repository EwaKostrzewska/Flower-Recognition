from flask import Flask, request, jsonify
import util

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    image = request.files['file']
    response = jsonify(util.predict_name(image))

    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


if __name__ == "__main__":
    util.load_saved_artifacts()
    app.run()
