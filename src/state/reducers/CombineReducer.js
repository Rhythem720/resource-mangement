import {combineReducers} from "redux"
import ResourceReducer from "./ResourceReducer"
const reducers=combineReducers({
    resource:ResourceReducer
})
export default reducers