import axios from 'axios';

const ReturnAxiosInstance = () => {
    const AxiosInstance = axios.create({
      baseURL: 'https://api.admin.manana.life/',
      timeout: 10000,
      responseType: "json",

      headers: {
        'token': '',
        'Content-Type': 'application/json',
      },
    });
  
    AxiosInstance.interceptors.request.use(
      async (config) => {
        config.headers.token = await localStorage.getItem('token');
        return config;
      },
      response => response,
      error => error, //Promise.reject(error)
    );
  
    AxiosInstance.interceptors.response.use(
      response => {
        console.log(response);
        if( response.data == null ) response.data = {};
        return response;
      },
      error => error,
    );
  
    return AxiosInstance;
  };
  export default ReturnAxiosInstance();