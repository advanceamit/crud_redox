
import { legacy_createStore as createStore } from "redux"
import rootReducer from "../../crudApp/reducer";


export const store=createStore(rootReducer)