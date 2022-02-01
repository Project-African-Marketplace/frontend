import { combineReducers } from "redux";
import { profileReducer as profile } from "./profileReducer";
import { itemReducer as item } from './itemReducer';

export default combineReducers({
    profile,
    item
})