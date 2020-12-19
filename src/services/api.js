import axios from 'axios';

const url = 'https://swapi.dev/api';


const api = { 
  ConnectApiLuke : () => {
    return axios.get(`${url}/people/1/`);    
  },
  
  ConnectApiDarth : () => {
    return axios.get(`${url}/people/4/`);    
  }

}

export default api;