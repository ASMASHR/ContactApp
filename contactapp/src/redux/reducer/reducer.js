import { GET_CONTACT } from "../action/action-types";

const initialState={
    contact:[]
}
 const reducer=(state=initialState, action)=>{
    switch (action.type) {
        case GET_CONTACT:
            return {...state,contact:action.payload}
            
    
        default:
            return state
    }
}
export default reducer