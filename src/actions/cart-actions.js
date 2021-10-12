import { types } from "../types/types";




export const addNewItem = (item) =>{
 return(dispatch)=>{
    dispatch(newItem(item))
}

}

const newItem= (item) => ({
    type:types.newItemCart,
    payload:item
})
    
