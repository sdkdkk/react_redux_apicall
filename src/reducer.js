// reducer.js
const initialState = {
    data: [],
    isLoading: false,
    error: null,
    data2: [],
    isLoading2: false,
    error2: null
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_START':
            return {...state, isLoading: true };
        case 'FETCH_DATA_SUCCESS':
            return {...state, data: action.payload, isLoading: false };
        case 'FETCH_DATA_ERROR':
            return {...state, error: action.payload, isLoading: false };
        case 'DELETE_DATA':
            return {...state, data: state.data.filter(data => data.id !== action.payload) };
        case 'FETCH_DATA2_REQUEST':
            return {...state, isLoading2: true };
        case 'FETCH_DATA2_SUCCESS':
            return {...state, data2: action.payload, isLoading2: false };
        case 'FETCH_DATA2_FAILURE':
            return {...state, error2: action.payload, isLoading2: false };
        default:
            return state;
    }
};
export default cartReducer