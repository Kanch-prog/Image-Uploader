const fileUploadInput = document.getElementById("file-upload");
const previewImage = document.getElementById("preview-image");
const downloadLink = document.getElementById("download-link");
const uploadedDiv = document.querySelector(".uploaded");

fileUploadInput.addEventListener("change", handleFileUpload);

function handleFileUpload(event) {
    const file = event.target.files[0];
    displayImage(file);
}

function displayImage(file) {
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        previewImage.src = imageUrl;
        downloadLink.textContent = imageUrl;

        const copyButton = document.querySelector(".copy-btn");
        copyButton.addEventListener("click", () => {
            copyToClipboard(imageUrl);
            alert("Image URL copied to clipboard!");
        });

        uploadedDiv.style.display = "flex";
    }
}

function copyToClipboard(text) {
    const textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
}
