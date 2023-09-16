import {
    authApiUrl, PredectionPage, Signupurl
  } from "./apiurl";
  const apiUrlKeys = Object.assign({}, authApiUrl, PredectionPage, Signupurl);
  
  export function generateApiUrl(apiKey, payload) {
    const apiUrl = apiUrlKeys[apiKey];
    return typeof apiUrl === "function" ? apiUrl(payload || {}) : apiUrl;
  }
  