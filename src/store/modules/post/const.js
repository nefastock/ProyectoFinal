const MODULE = 'POST';
const GET_ALL = 'GET_ALL';
const GET = 'GET';
const CREATE = 'CREATE';
const DELETE = 'DELETE';
const UPDATE = 'UPDATE';

export const POST_GET_ALL_START = `${MODULE}/${GET_ALL}/START`;
export const POST_GET_ALL_SUCCESS = `${MODULE}/${GET_ALL}/SUCCESS`;
export const POST_GET_ALL_ERROR = `${MODULE}/${GET_ALL}/ERROR`;

export const POST_GET_START = `${MODULE}/${GET}/START`;
export const POST_GET_SUCCESS = `${MODULE}/${GET}/SUCCESS`;
export const POST_GET_ERROR = `${MODULE}/${GET}/ERROR`;

export const POST_CREATE_START = `${MODULE}/${CREATE}/START`;
export const POST_CREATE_SUCCESS = `${MODULE}/${CREATE}/SUCCESS`;
export const POST_CREATE_ERROR = `${MODULE}/${CREATE}/ERROR`;

export const POST_DELETE_START = `${MODULE}/${DELETE}/START`;
export const POST_DELETE_SUCCESS = `${MODULE}/${DELETE}/SUCCESS`;
export const POST_DELETE_ERROR = `${MODULE}/${DELETE}/ERROR`;

export const POST_UPDATE_START = `${MODULE}/${UPDATE}/START`;
export const POST_UPDATE_SUCCESS = `${MODULE}/${UPDATE}/SUCCESS`;
export const POST_UPDATE_ERROR = `${MODULE}/${UPDATE}/ERROR`;