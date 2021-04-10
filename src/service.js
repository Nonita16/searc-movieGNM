import axios from 'axios';

const Instance = axios.create();

Instance.defaults.baseURL = 'https://api.themoviedb.org/3' || "";
Instance.defaults.headers.common["Content-Type"] =
    "application/json";
//Instance.defaults.headers.common = {'Authorization': `Bearer ${token}`}
//Instance.defaults.headers.common["Authorization"]= {'Authorization': `Bearer ${token}`}

export default Instance;