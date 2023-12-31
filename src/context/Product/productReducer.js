import { TYPES } from "../types/types";

export const productReducer = (state, action) => {
   const { type, payload } = action;

    switch (type) {
        case TYPES.GET_PRODUCTS:            
          return {
            ...state,
            products: payload,
            isLoading: false
          }
          case TYPES.SET_PRODUCTS:
            return {
              ...state,
              products: payload,
              isLoading: false
            }
    
        default:
            return {
              ...state
          }
    }
}