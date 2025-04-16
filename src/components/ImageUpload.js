import { useState, useRef } from 'react';
import './ImageUpload.css'; // Import the CSS file

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const fileInputRef = useRef(null);

  // Allowed MIME types
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  const maxSizeMB = 5; // Maximum file size in MB

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      resetStates();
      return;
    }

    // Validate file type
    if (!allowedTypes.includes(file.type)) {
      setUploadStatus('Error: Only JPG, JPEG, and PNG files are allowed');
      resetStates();
      fileInputRef.current.value = '';
      return;
    }

    // Validate file size
    if (file.size > maxSizeMB * 1024 * 1024) {
      setUploadStatus(`Error: File size exceeds ${maxSizeMB}MB limit`);
      resetStates();
      fileInputRef.current.value = '';
      return;
    }

    setSelectedFile(file);
    setUploadStatus('');

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const resetStates = () => {
    setSelectedFile(null);
    setPreviewUrl('');
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setUploadStatus('Please select a valid image file first');
      return;
    }

    setUploadStatus('Upload simulated successfully!');
    console.log('File ready for client-side processing:', selectedFile);
  };

  const handleCancel = () => {
    resetStates();
    fileInputRef.current.value = '';
    setUploadStatus('');
  };

  return (
    <div className="upload-container">
      <h2>Image Upload</h2>
      <p>Allowed formats: JPG, JPEG, PNG (Max {maxSizeMB}MB)</p>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".jpg,.jpeg,.png"
        className="file-input"
      />

      {previewUrl && (
        <div className="preview-container">
          <h4>Preview:</h4>
          <img src={previewUrl} alt="Preview" className="preview-image" />
          <p>File: {selectedFile.name}</p>
          <p>Size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
          <p>Type: {selectedFile.type}</p>
        </div>
      )}

      <div className="button-group">
        <button
          onClick={handleUpload}
          disabled={!selectedFile}
          className={`upload-button ${selectedFile ? '' : 'disabled'}`}
        >
          Simulate Upload
        </button>

        <button onClick={handleCancel} className="cancel-button">
          Cancel
        </button>
      </div>

      {uploadStatus && (
        <p
          className={`status-message ${
            uploadStatus.includes('Error') ? 'error' : 'success'
          }`}
        >
          {uploadStatus}
        </p>
      )}
    </div>
  );
};

export default ImageUpload;
