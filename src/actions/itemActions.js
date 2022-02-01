//util imports
import axiosWithAuth from "../utils/axiosWithAuth";

//action exports
export const I_FETCH_START = "I_FETCH_START";
export const I_FETCH_SUCCESS = "I_FETCH_SUCCESS";
export const I_FETCH_FAILURE = "I_FETCH_FAILURE";
export const I_POST_START = "I_POST_START";
export const I_POST_SUCCESS = "I_POST_SUCCESS";
export const I_POST_FAILURE = "I_POST_FAILURE";

export const getItems = (dispatch) => {
    return function thunk() {
        dispatch(iFetchStart());
        axiosWithAuth().get(``
        ).then(resp => {
            dispatch(iFetchSuccess(resp.data));
        }).catch(err => {
            dispatch(iFetchFailure(err));
        });
    }
}

export const postItem = (dispatch) => {
    return function thunk(item) {
        dispatch(iPostStart());
        axiosWithAuth().post(``, item
        ).then(resp => {
            dispatch(iPostSuccess(resp.data));
        }).catch(err => {
            dispatch(iPostFailure(err));
        })
    }
}

export const iFetchStart = () => {
    return({type: I_FETCH_START})
}
export const iFetchSuccess = (items) => {
    return({type: I_FETCH_SUCCESS, payload: items})
}
export const iFetchFailure = (error) => {
    return({type: I_FETCH_FAILURE, payload: error})
}
export const iPostStart = () => {
    return({type: I_POST_START})
}
export const iPostSuccess = (items) => {
    return({type: I_POST_SUCCESS, payload: items})
}
export const iPostFailure = (error) => {
    return({type: I_POST_FAILURE, payload: error})
}
