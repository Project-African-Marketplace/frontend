//actions import
import 
{
I_FETCH_START,
I_FETCH_SUCCESS,
I_FETCH_FAILURE,
I_POST_START,
I_POST_SUCCESS,
I_POST_FAILURE
} from '../actions/itemActions';

const initialState = {
    error: '',
    isPosting: false,
    isFetching: false,
    items: [],
}

export function itemReducer(state = initialState, action){
    switch(action.type) {
        case I_FETCH_START: 
            return {
                ...state,
                isFetching: true
            }
        case I_FETCH_FAILURE:
            return {
                ...state,
                error: action.payload
            }
            
        case I_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.payload,
                error: ''
            }
            
        case I_POST_START: 
            return {
                ...state,
                isPosting: true
            }
            
        case I_POST_SUCCESS:
            return {
                ...state,
                isPosting: false,
                error: ''
            }
    
        case I_POST_FAILURE:
            return {
                ...state,
                error: action.payload
            }
            
        default: 
            return state;
    }
}