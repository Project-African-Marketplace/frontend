//actions import
import 
    {  P_FETCH_START, 
    P_FETCH_SUCCESS, 
    P_FETCH_FAILURE, 
    P_POST_START, 
    P_POST_SUCCESS,
    P_POST_FAILURE, 
    P_TOGGLE_EDIT } 
from '../actions/profileActions';

const initialState = {
    isPosting: false,
    isFetching: false,
    isEditing: false,
    profile: {
        username: '',
        bio: '',
        file: '',
        profilePicture: ''
    },
    error: ''
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case P_FETCH_START:
            return {
                ...state,
                isFetching: true
            }
        
        case P_FETCH_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        
        case P_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                profile: action.payload,
                error: ''
            }
        
        case P_POST_START: 
            return {
                ...state,
                isPosting: true
            }
        
        case P_POST_SUCCESS:
            return {
                ...state,
                isPosting: false,
                error: ''
            }

        case P_POST_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        
        case P_TOGGLE_EDIT:
            return {
                ...state,
                isEditing: !state.isEditing
            }

        default: 
            return state;
    }
}