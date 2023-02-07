// actions.js
import axios from 'axios';

export const fetchData = () => dispatch => {
    dispatch({ type: 'FETCH_DATA_START' });
    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: res.data });
        })
        .catch(err => {
            dispatch({ type: 'FETCH_DATA_ERROR', payload: err });
        });
};

export const fetchData2 = () => dispatch => {
    dispatch({ type: 'FETCH_DATA2_REQUEST' });
    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => dispatch({ type: 'FETCH_DATA2_SUCCESS', payload: data }))
        .catch(error => dispatch({ type: 'FETCH_DATA2_FAILURE', payload: error }));
};

export const deleteData = (id) => ({
    type: 'DELETE_DATA',
    payload: id
})