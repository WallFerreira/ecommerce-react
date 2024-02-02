import { Product } from "../../data/product";


interface CartState {
  cart: Product[];
}


const intialState: CartState = {
  cart: [],
};

interface CartAction {
  type: string;
  payload: Product;
};

export function cartReducer(state = intialState, action: CartAction) {

  switch (action.type) {
    case 'cart/add-product':
      return {
        ...state,
        cart: [
          ...state.cart,
          action.payload
        ]
      }
    case 'cart/remove-product':

      const productToRemove = action.payload
      const CartFilered = state.cart.filter(product => product.id !== productToRemove.id)

      return {
        ...state,
        cart: CartFilered,
      }
  }

  return state
}