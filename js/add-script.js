let addButton = document.getElementById('addButton');

addButton.onclick = upload;
const formData = new FormData();

function upload(){

    fetch('/upload-photo', {
        method: 'POST',
        body: formData
    })
    .then(response => {
    // handle response
    })
    .catch(error => {
        console.error(error);
    });

}

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
    if (this.files && this.files[0]) {
        let img = document.querySelector('img');
        img.onload = () => {
            URL.revokeObjectURL(img.src);
        }
        let fullPath = document.getElementById('upload').value;
        if (fullPath) {
            let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
            var filename = fullPath.substring(startIndex);
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                filename = filename.substring(1);
            }
        }
        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        document.getElementById('filename').value = filename;
        formData.delete('photo')
        formData.delete('name')
        
        formData.append('photo', this.files[0]);
        formData.append('name', filename);
    }
    });
});