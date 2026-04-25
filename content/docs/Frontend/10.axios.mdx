---
sidebar_label: 'Axios Setup'
title: 'Axios HTTP Client - Complete Setup Guide'
description: 'Complete guide to setting up Axios HTTP client with interceptors, authentication headers, and error handling for React applications.'
---

# Axios HTTP Client - Complete Setup Guide

A comprehensive guide to setting up and configuring Axios HTTP client with interceptors, authentication, and error handling in React applications.

## Axios Instance with Interceptors

```javascript
// src/api/api.js 

import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("instabook_token");
    if (token) {
      config.headers.instabook_token = token; 
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("instabook_token");
      window.location.href = "/login";
    }
    return Promise.reject(error); 
  }
);

export default axiosInstance;