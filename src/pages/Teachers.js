import React from "react";
import './Teachers.css'

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

return (
    <div id="upload-box">
		<h2>Please upload all class documents</h2>
		<h4>Including Lesson Plan, Seating Chart, Classroom Login, ect.</h4>

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
