---
sidebar_label: 'File Upload'
title: 'React File Upload - Complete Implementation Guide'
description: 'Comprehensive guide to implementing file upload functionality in React with validation, preview, and FormData handling for images and PDFs.'
---

# React File Upload - Complete Implementation Guide

A comprehensive guide to implementing file upload functionality in React applications with validation, preview, and proper error handling.

## File Upload Component with Validation

```javascript
import React, { useState } from 'react';

const FileUploadForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [pdfPreview, setPdfPreview] = useState(null);
  const [error, setError] = useState({ image: '', pdf: '' });

  // Constants for file validation
  const MAX_IMAGE_SIZE = 1 * 1024 * 1024; // 1MB in bytes
  const MAX_PDF_SIZE = 500 * 1024; // 500KB in bytes
  const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png'];
  const ALLOWED_PDF_TYPE = 'application/pdf';

  // Validate image file
  const validateImage = (file) => {
    // Reset error
    setError(prev => ({ ...prev, image: '' }));

    // Check file type
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      setError(prev => ({ 
        ...prev, 
        image: 'Only JPEG and PNG files are allowed' 
      }));
      return false;
    }

    // Check file size
    if (file.size > MAX_IMAGE_SIZE) {
      setError(prev => ({ 
        ...prev, 
        image: 'Image size should be less than 1MB' 
      }));
      return false;
    }

    return true;
  };

  // Validate PDF file
  const validatePdf = (file) => {
    // Reset error
    setError(prev => ({ ...prev, pdf: '' }));

    // Check file type
    if (file.type !== ALLOWED_PDF_TYPE) {
      setError(prev => ({ 
        ...prev, 
        pdf: 'Only PDF files are allowed' 
      }));
      return false;
    }

    // Check file size
    if (file.size > MAX_PDF_SIZE) {
      setError(prev => ({ 
        ...prev, 
        pdf: 'PDF size should be less than 500KB' 
      }));
      return false;
    }

    return true;
  };

  // Format file size to readable format
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Handle image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      if (validateImage(file)) {
        setSelectedImage(file);
        
        // Create preview URL for image
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
    // Reset input value if validation fails
    if (error.image) {
      event.target.value = null;
    }
  };

  // Handle PDF upload
  const handlePdfChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      if (validatePdf(file)) {
        setSelectedPdf(file);
        
        // Create preview URL for PDF
        const url = URL.createObjectURL(file);
        setPdfPreview(url);
      }
    }
    // Reset input value if validation fails
    if (error.pdf) {
      event.target.value = null;
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Final validation check before submission
    if (error.image || error.pdf) {
      alert('Please fix the errors before submitting');
      return;
    }

    const formData = new FormData();
    if (selectedImage) formData.append('image', selectedImage);
    if (selectedPdf) formData.append('pdf', selectedPdf);

    try {
      const response = await fetch('your-upload-api-endpoint', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Files uploaded successfully!');
        // Reset form
        setSelectedImage(null);
        setSelectedPdf(null);
        setImagePreview(null);
        setPdfPreview(null);
        setError({ image: '', pdf: '' });
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Failed to upload files');
    }
  };

  // Cleanup preview URLs
  React.useEffect(() => {
    return () => {
      if (pdfPreview) {
        URL.revokeObjectURL(pdfPreview);
      }
    };
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload Section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Upload Image (PNG/JPEG, max 1MB)
          </label>
          <input
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          {error.image && (
            <p className="text-red-500 text-sm mt-1">{error.image}</p>
          )}
          {selectedImage && (
            <p className="text-sm text-gray-500">
              Selected file size: {formatFileSize(selectedImage.size)}
            </p>
          )}
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-w-xs h-auto rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        {/* PDF Upload Section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Upload PDF (max 500KB)
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={handlePdfChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-green-50 file:text-green-700
              hover:file:bg-green-100"
          />
          {error.pdf && (
            <p className="text-red-500 text-sm mt-1">{error.pdf}</p>
          )}
          {selectedPdf && (
            <p className="text-sm text-gray-500">
              Selected file size: {formatFileSize(selectedPdf.size)}
            </p>
          )}
          {pdfPreview && (
            <div className="mt-2">
              <iframe
                src={pdfPreview}
                className="w-full h-64 border rounded-lg"
                title="PDF Preview"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Upload Files
        </button>
      </form>
    </div>
  );
};

export default FileUploadForm;
```

## Key Features

1. **File Validation**: Type and size validation for both images and PDFs
2. **Preview Generation**: Image and PDF preview functionality
3. **Error Handling**: Comprehensive error messages and validation
4. **FormData Usage**: Proper FormData handling for file uploads
5. **Cleanup**: Memory cleanup for preview URLs
6. **Responsive Design**: Tailwind CSS styling for modern UI

## Usage

1. Import the component into your React application
2. Configure the upload endpoint in the `handleSubmit` function
3. Customize validation rules as needed
4. Style the component according to your design system
