import React from "react";
import './GuestTeacher.css'

/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
function FileUpload() {
  // State to store uploaded file
  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);

    // Add code here to upload file to server
    // ...
  }
<div>
	<h1>Welcome </h1>
	</div>
  return (
    <div id="upload-box">
		<h1>Welcome Guest Teacher</h1>
		<h2>Please upload notes for the Teacher</h2>

      <input type="file" onChange={handleUpload} />
      <p>Filename: {file.name}</p>
      {file && <ImageThumb image={file} />}
    </div>
  );
}

/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} />;
};


export default function App() {
  return <FileUpload />;
}

