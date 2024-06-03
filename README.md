# Image-Uploader
Solution for Image Uploader https://legacy.devchallenges.io/paths/full-stack-developer


Live Site: [image-uploader-gray-one.vercel.ap](https://image-uploader-gray-one.vercel.app/)https://image-uploader-gray-one.vercel.app/
# Image Uploader Application

## Overview
This project is an Image Uploader application designed to allow users to easily upload and manage images. The application supports drag-and-drop functionality, folder selection, shows a loader during upload, displays the uploaded image, and provides options to copy the image URL to the clipboard.

## User Stories
- **Drag and Drop:** Users can drag and drop an image to upload it.
- **Folder Selection:** Users can choose to select an image from their folder.
- **Upload Loader:** Users can see a loader when uploading an image.
- **View Uploaded Image:** Once the image is uploaded, users can see the image and copy its URL.
- **Copy to Clipboard:** Users can copy the uploaded image URL to the clipboard.

## Technologies Used
- **Front-end:** React.js (with Material-UI for styling)
- **Back-end:** Node.js with Express
- **File Storage:** AWS S3 or local storage (based on configuration)

## Setup Instructions

### Prerequisites
- Node.js installed
- AWS account (if using AWS S3 for storage)

### Front-end Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/image-uploader.git
   cd image-uploader
Install dependencies:

2. ``bash
npm install
Start the development server:

3. ``bash
npm start
Back-end Setup
Navigate to the server directory:

4. ``bash
Copy code
cd server
Install dependencies:

5. ``bash
npm install
Set up environment variables:
Create a .env file and add the necessary configuration:

6.
PORT=5000
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
S3_BUCKET_NAME=your_s3_bucket_name
Start the server:

7. ``bash
npm start

## File Structure
/client: Contains the React front-end application
/server: Contains the Node.js back-end application
/public: Public assets and icons

## Front-end Description
Drag and Drop Zone: Allows users to drag and drop an image to upload.
File Input: Allows users to select an image from their folder.
Loader: Displays a loader while the image is being uploaded.
Image Display: Shows the uploaded image and provides a URL to copy.
Copy Button: Allows users to copy the image URL to the clipboard.
Back-end Description
API Endpoints: Provides endpoints for uploading images and generating URLs.
File Storage: Manages file storage and retrieval using AWS S3 or local storage.
