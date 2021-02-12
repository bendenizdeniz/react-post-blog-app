import axios from 'axios';

export function Api() {
    return axios.create({
        baseURL: 'https://react-yazi-yorum.herokuapp.com',
    });
}

