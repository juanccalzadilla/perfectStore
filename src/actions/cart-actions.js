import { types } from "../types/types";
import Swal from 'sweetalert2'




export const addNewItem = (item) =>{
 return(dispatch)=>{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Item has been added',
        text:item.product_name,
        showConfirmButton: false,
        timer: 1500
      })
    dispatch(newItem(item))
}

}

const newItem= (item) => ({
    type:types.newItemCart,
    payload:item
})
    
