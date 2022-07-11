import { ADD_STUDENT } from "../action/userAction";

const intitialState=[{}]
 const userReducer=(state=intitialState,action)=>{
    switch(action.type){
        case ADD_STUDENT:
            state= action.payload
            console.log(state);
            console.log(action.payload)
        return state
        default: return state
    }

    }
    export default userReducer




