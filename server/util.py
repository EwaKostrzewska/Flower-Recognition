import tensorflow as tf
from tensorflow.keras.applications import mobilenet_v2
import numpy as np
import json
import pickle
from PIL import Image
import matplotlib.pyplot as plt

_flower_labels = {}
_class_names = []
_model = None
IMAGE_SIZE = 224


def load_saved_artifacts():
    print("Loading saved artifacts...start.")

    global _flower_labels
    with open("./artifacts/cat_to_name.json", "r") as f:
        _flower_labels = json.load(f)

    global _class_names
    _class_names = pickle.load(open("./artifacts/class_names.p", "rb"))

    global _model
    _model = tf.keras.models.load_model("./artifacts/model.h5")

    print("Loading saved artifacts...done.")

def get_flower_name(index):
    index = int(index)
    flower_id = _class_names[index]
    flower_name = _flower_labels[flower_id]
    return flower_name

def preprocess_image(path):
    img = Image.open(path).resize((IMAGE_SIZE, IMAGE_SIZE))
    img = np.asarray(img)
    img = np.expand_dims(img, axis=0)
    img = mobilenet_v2.preprocess_input(img)
    return img

def predict_name(path):
    img = preprocess_image(path)
    predictions = _model.predict(img)[0]
    idx = np.argmax(predictions)
    flower_name = get_flower_name(idx)
    confidence = predictions[idx]

    return {
        'flower name': flower_name,
        'confidence': float(confidence)
    }


if __name__ == '__main__':
    load_saved_artifacts()

    print(predict_name("../dataset/test set/aa1.jpg"))
    print(predict_name("../dataset/test set/aa10.jpg"))
    print(predict_name("../dataset/test set/aa11.jpg"))
    print(predict_name("../dataset/test set/aa12.jpg"))


