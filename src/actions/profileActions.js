//util imports
import axiosWithAuth from "../utils/axiosWithAuth";

// action exports
export const GET_PROFILE = "GET_PROFILE";
export const POST_PROFILE = "POST_PROFILE";
export const P_FETCH_START = "P_FETCH_START";
export const P_FETCH_SUCCESS = "P_FETCH_SUCCESS";
export const P_FETCH_FAILURE = "P_FETCH_FAILURE";
export const P_POST_START = "P_POST_START";
export const P_POST_SUCCESS = "P_POST_SUCCESS";
export const P_POST_FAILURE = "P_POST_FAILURE";
export const P_TOGGLE_EDIT = "P_TOGGLE_EDIT";

export const getProfile = (dispatch) => {
    return function thunk() {
        dispatch(pFetchStart());
        axiosWithAuth.get(``
        ).then(resp => {
            dispatch(pFetchSuccess(resp.data))
        }).catch(err => {
            dispatch(pFetchFailure(err));
        })
    }
}

export const postProfile = (dispatch) => {
    return function thunk(profile) {
        dispatchEvent(pPostStart());
        axiosWithAuth.post(``, profile
        ).then(resp => {
            dispatch(pPostSuccess());
            dispatch(pToggleEdit());
        }).catch(err => {
            dispatch(pPostFailure(err))
        })
    }
}

export const pFetchStart = () => {
    return({type: P_FETCH_START});
}
export const pFetchSuccess = (profile) => {
    return({type: P_FETCH_SUCCESS, payload: profile});
}
export const pFetchFailure = (err) => {
    return({type: P_FETCH_FAILURE, payload: err});
}
export const pPostStart = () => {
    return({type: P_POST_START});
}

export const pPostSuccess = () => {
    return({type: P_POST_SUCCESS});
}

export const pPostFailure = (err) => {
    return({type: P_POST_FAILURE, payload: err});
}

export const pToggleEdit = () => {
    return({type: P_TOGGLE_EDIT});
}