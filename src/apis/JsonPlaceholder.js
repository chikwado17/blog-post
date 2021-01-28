import axios from 'axios';

const JsonPlaceholder = () => axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export default JsonPlaceholder;