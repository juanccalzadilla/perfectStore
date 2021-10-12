import { types } from "../types/types"

const initialState ={
    eventos: [],
}
export const shoppingCart = (state = initialState, action) => {

    switch (action.type) {

        case types.newItemCart :
            return{
                ...state,
                eventos:[...state.eventos,action.payload]
            }
        default: 
        return state
    }
}