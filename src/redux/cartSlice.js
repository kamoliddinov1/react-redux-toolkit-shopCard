import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "basket",
  initialState: {
    cartBasket: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      const itemInCart = state.cartBasket.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartBasket.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartBasket.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartBasket.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    removeBasket: (state, action) => {
      const removeItem = state.cartBasket.filter(
        (item) => item.id !== action.payload
      );
      state.cartBasket = removeItem;
    },

    clearBasket: (state) => {
      state.cartBasket = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToBasket,
  incrementQuantity,
  decrementQuantity,
  removeBasket,
  clearBasket,
} = cartSlice.actions;
