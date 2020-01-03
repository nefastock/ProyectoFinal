import axios from 'axios';
import { API_HOST } from './config';

const RESOURCE = 'post';


export const findAllPost = (jwt = '') => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_HOST}/${RESOURCE}`, {
            headers: {
                authorization: `bearer ${jwt}`,
            }
        }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.message));
    })
};

export const findPostById = (jwt = '', id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_HOST}/${RESOURCE}/${id}`, {
            headers: {
                authorization: `bearer ${jwt}`,
            }
        }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.message));
    })
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