from fastapi import FastAPI, File, UploadFile 
import uvicorn 
import util 
from io import BytesIO

app = FastAPI() 

@app.post('/predict')
async def predict(file: UploadFile = File(...)):
    image = BytesIO(await file.read())
    result = util.predict_name(image)

    return result


if __name__ == "__main__":
    util.load_saved_artifacts()
    uvicorn.run(app, host='localhost', port=8000)

