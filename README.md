# Flower Recognition Website

[![Python](https://img.shields.io/badge/Python-darkblue.svg?style=flat&logo=python&logoColor=white)](https://www.python.org)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=flat&logo=TensorFlow&logoColor=white)](https://www.tensorflow.org)
[![Flask](https://img.shields.io/badge/flask-%23000.svg?style=flat&logo=flask&logoColor=white)](https://flask.palletsprojects.com/en/2.2.x/)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=flat&logo=fastapi)](https://fastapi.tiangolo.com/)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)

<br />

![](ui_screenshot.PNG)

The website recognizes 102 different species of flowers (all flower names are in JSON file: `dataset/cat_to_name.json`). Firstly, a CNN model was built using transfer learning (MobileNetV2) on images from [Kaggle dataset](https://www.kaggle.com/datasets/spaics/hackathon-blossom-flower-classification). Secondly, created a server API using Flask and FastAPI in Python. At the end, created User Interface using HTML, CSS and JavaScript.

## How to run the website on your computer?
1. Go to `server` folder
```bash
cd server
```

2. Install Python packages
```
pip3 install -r requirements.txt
```

3. Run Flask or FastAPI server
```
python server-Flask.py
```
or
```
python server-FastAPI.py
```

4. Open HTML file `UI/app.html`

## Folder structure
* UI: Contains UI website code
* dataset: Dataset used for training and testing built model downloaded from Kaggle: https://www.kaggle.com/datasets/spaics/hackathon-blossom-flower-classification 
* models: Contains saved models
* server: Python Flask and FastAPI server 
* training: Contains Python notebooks for building models 

## Technologies used in the project
* Python 
* Numpy 
* Matplotlib for data visualization
* Pandas for saving predictions in `test set` 
* Tensorflow for building model 
* Pillow for reading image files
* Flask/FastAPI for http server 
* HTML/CSS/JavaScript for creating User Interface
* Google Colab, Jupyter notebook and Visual Studio Code as IDE
* Postman for testing API

