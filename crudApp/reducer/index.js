
import { combineReducers } from "redux";

import  userReducer  from '../../crudApp/reducer/userReducer'
const rootReducer = combineReducers({
    user: userReducer

})
export default rootReducer