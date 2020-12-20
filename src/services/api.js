import axios from 'axios';

const url = 'https://swapi.dev/api';


const api = {   
  ConnectApiDarth : () => {
    return axios.get(`${url}/people/4/`);    
  },

  ConnectApiLuke : () => {
    return axios.get(`${url}/people/1/`);    
  }

}

export default api;