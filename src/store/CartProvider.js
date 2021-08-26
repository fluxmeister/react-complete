import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};


const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCartitemIndex = state.items.findIndex(item => item.id === action.item.id);
    /** .findIndex() is a built-in method in JavaScript , 
     * which finds an index of an item in an array.
     * This function will be executed for every item in an array.
     * It will return true or false, regarding of existence of that particular item.
     */

    const existingCartItem = state.items[existingCartitemIndex];
    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem, 
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartitemIndex] = updatedItem;
    } else {
      // updateditem = { ...action.item };
      // updatedItems = state.items.concat(updatedItem);
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartitemIndex = state.items.findIndex(
      (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartitemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
          updatedItems = state.items.filter(item => item.id !== action.id);  
          /* filter() is a built-in method whish returns a new array, filtered, by applying specific conditions */
        } else {
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          updatedItems = [...state.items];
          updatedItems[existingCartitemIndex] = updatedItem;
        }

        return {
          items: updatedItems, 
          totalAmount: updatedTotalAmount
        };
  }
  return defaultCartState;
};


const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;