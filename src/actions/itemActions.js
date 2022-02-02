//util imports
import axiosWithAuth from "../utils/axiosWithAuth";

//action exports
export const C_FETCH_START = "C_FETCH_START";
export const C_FETCH_SUCCESS = "C_FETCH_SUCCESS";
export const C_FETCH_FAILURE = "C_FETCH_FAILURE";
export const SET_CATEGORY = "SET_CATEGORY";
export const I_FETCH_START = "I_FETCH_START";
export const I_FETCH_SUCCESS = "I_FETCH_SUCCESS";
export const I_FETCH_FAILURE = "I_FETCH_FAILURE";
export const I_POST_START = "I_POST_START";
export const I_POST_SUCCESS = "I_POST_SUCCESS";
export const I_POST_FAILURE = "I_POST_FAILURE";

export const getCategories = () => (dispatch) => {
    console.log('working');
    dispatch(cFetchStart());
    axiosWithAuth(
    ).get(`/category`
    ).then(resp => {
        console.log(resp.data);
        dispatch(cFetchSuccess(resp.data));
    }).catch(err => {
        dispatch(cFetchFailure(err.message));
    });
}

export const getItems = (category) => (dispatch) => {
    dispatch(iFetchStart());
    console.log(category);
    axiosWithAuth(
    ).get(`/products/${category}`
    ).then(resp => {
        console.log(resp);
        dispatch(iFetchSuccess(resp.data));
    }).catch(err => {
        dispatch(iFetchFailure(err.message));
    });

}

export const postItem = (dispatch) => {
    return function thunk(item) {
        console.log(item);
        dispatch(iPostStart());
        axiosWithAuth(    
        ).post(`/products`, item
        ).then(resp => {
            dispatch(iPostSuccess(resp.data));
        }).catch(err => {
            dispatch(iPostFailure(err.message));
        })
    }
}

export const cFetchStart = () => {
    return({type: C_FETCH_START});
}
export const cFetchSuccess = (categories) => {
    return({type: C_FETCH_SUCCESS, payload: categories});
}
export const cFetchFailure = (error) => {
    return({type: C_FETCH_FAILURE, payload: error});
}
export const setCategory = (category) => {
    return({type: SET_CATEGORY, payload: category});
}
export const iFetchStart = () => {
    return({type: I_FETCH_START});
}
export const iFetchSuccess = (items) => {
    return({type: I_FETCH_SUCCESS, payload: items});
}
export const iFetchFailure = (error) => {
    return({type: I_FETCH_FAILURE, payload: error});
}
export const iPostStart = () => {
    return({type: I_POST_START});
}
export const iPostSuccess = (items) => {
    return({type: I_POST_SUCCESS, payload: items});
}
export const iPostFailure = (error) => {
    return({type: I_POST_FAILURE, payload: error});
}
