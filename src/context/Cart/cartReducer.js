import { TYPES } from "../types/types";

export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case TYPES.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, payload]
            }
        case TYPES.EMPTY_CART:
            return {
                ...state,
                cart: []
            }
        case TYPES.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload.id)
            }
        default:
            return state
    }
}