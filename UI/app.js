// Dropzone from Youtube tutorial 
// dcode: Simple Drag and Drop File Upload Tutorial - HTML, CSS & JavaScript
// https://www.youtube.com/watch?v=Wtrin7C4b7w
document.querySelectorAll(".drop-zone__input").forEach(inputElement => {
    const dropZoneElement = inputElement.closest(".drop-zone");

    dropZoneElement.addEventListener("click", e => {
        inputElement.click();
    });

    inputElement.addEventListener("change", e => {
        if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    });

    dropZoneElement.addEventListener("dragover", e => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
    });

    ["dragleave", "dragend"].forEach(type => {
        dropZoneElement.addEventListener(type, e => {
            dropZoneElement.classList.remove("drop-zone--over");
        });
    });

    dropZoneElement.addEventListener("drop", e => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("drop-zone--over");
    });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

    console.log(file);

    // First time - remove prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }

    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }

    thumbnailElement.dataset.label = file.name;

    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${ reader.result }')`;
        };
    } else {
        thumbnailElement.style.backgroundImage = null;
    }
}


// Predicting Flower Name after submitting the button
function onClickedPredictName() {
    console.log("Submit button clicked");  

    let predName = document.getElementById("uiPredictedName");
    let input = document.getElementById("fileUpload");
    
    if (input.files.length) {
        let image_file = input.files[0]
        console.log("File name: " + image_file.name)
    
        if (image_file.type.startsWith("image/")) {
            // const url = "http://127.0.0.1:5000/predict";    // Flask server
            const url = "http://localhost:8000/predict";    // FastAPI server
            
            let formData = new FormData();
            formData.append('file', image_file);

            console.log("Start fetch");

            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {predName.innerHTML = "<h2>" + "Name: " + data.flower_name.toString() + "</br>" 
                            + "Confidence: " + (data.confidence * 100).toFixed(2) + "%</h2>";})

            console.log("Fetch ended");

        } else {
            alert("Chosen file is not an image. Choose another file.")
        }

    } else {
        alert("First choose a file.");
    }

}

