import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api', // All API calls are now internal to Next.js
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// Optional: Request interceptor (e.g., for adding auth tokens)
// apiClient.interceptors.request.use(
//   (config) => {
//     // const token = localStorage.getItem('token');
//     // if (token) {
//     //   config.headers.Authorization = `Bearer ${token}`;
//     // }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Response interceptor for logging and basic error handling
apiClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // You can do something with response data here
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('API Error Response Data:', error.response.data);
      console.error('API Error Response Status:', error.response.status);
      console.error('API Error Response Headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.error('API Error Request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('API Error Message:', error.message);
    }
    // console.error('API Error Config:', error.config); // Uncomment for more detailed config logging

    // You might want to dispatch a global error action here, or show a toast notification
    // For now, we just re-throw the error so that component-level error handling can catch it
    return Promise.reject(error);
  }
);

export default apiClient;
