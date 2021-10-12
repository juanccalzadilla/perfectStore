import { types } from "../types/types";




export const addNewItem = (item) =>{
 return(dispatch)=>{
    console.log(item);

    dispatch(newItem(item))
}

}

const newItem= (item) => ({
    type:types.newItemCart,
    payload:item
})
    
