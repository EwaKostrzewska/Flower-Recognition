from flask import Flask, request
import util

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    image = request.files['file']
    response = util.predict_name(image)

    return response


if __name__ == "__main__":
    util.load_saved_artifacts()
    app.run()
