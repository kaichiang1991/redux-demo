import { combineReducers } from "redux";
import { adjust } from "./count";
import { adjustList } from "./person";

export default combineReducers({
    count: adjust,
    person: adjustList
})