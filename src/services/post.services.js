import axios from 'axios';
import { API_HOST } from './config';

const RESOURCE = 'post';

export const findAllPost = () => {

    return axios(`${API_HOST}/${RESOURCE}`);
};

export const findPostById = (id) => {
    return axios(`${API_HOST}/${RESOURCE}/${id}`);
};

export const savePost = (jwt = '', data) => {
    return new Promise((resolve, reject) => {
        axios.post(`${API_HOST}/${RESOURCE}`, data, {
            headers: {
                authorization: `bearer ${jwt}`,
            }
        }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.message));
    })
}

export const updatePost = (jwt = '', data) => {
    return new Promise((resolve, reject) => {
        axios.patch(`${API_HOST}/${RESOURCE}/${data.id}`, data, {
            headers: {
                authorization: `bearer ${jwt}`,
            }
        }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.message));
    })
}