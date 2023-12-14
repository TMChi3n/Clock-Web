import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/getAll');
}

const add = data => {
    return httpClient.post('/add', data);
}

const get = id => {
    return httpClient.get(`/get/${id}`);
}

const search = query => {
    return httpClient.get(`/search?query=${query}`);
}

const update = (id, data) => {
    return httpClient.put(`/edit/${id}`, data);
}

const remove = id => {
    return httpClient.delete(`/delete/${id}`);
}
export default { getAll, add, get, update, remove, search };