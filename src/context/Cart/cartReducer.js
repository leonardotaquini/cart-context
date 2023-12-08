import { TYPES } from "../types/types";

export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case TYPES.ADD_TO_CART:
            const product = state.cart.find(item => item.id === payload.id);
            if (product) {
                return {
                    ...state,
                    cart: state.cart.map(item => item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item)
                }
            }
            return {
                ...state,
                cart: [...state.cart, { ...payload, quantity: 1 }]
            }
        case TYPES.EMPTY_CART:
            return {
                ...state,
                cart: []
            }
        case TYPES.REMOVE_FROM_CART:
            if (payload.quantity === 1) {
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== payload.id)
                }
            }
            return {
                ...state,
                cart: state.cart.map(item => item.id === payload.id ? { ...item, quantity: item.quantity - 1 } : item)
            }
            
        default:
            return state
    }
}