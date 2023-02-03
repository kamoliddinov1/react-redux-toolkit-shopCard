import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    cartfavorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const itemInCart = state.cartfavorites.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartfavorites.push({ ...action.payload, quantity: 1 });
      }
    },
    removefavorites: (state, action) => {
      const removefavorites = state.cartfavorites.filter(
        (item) => item.id !== action.payload
      );
      state.cartfavorites = removefavorites;
    },
  },
});

export const cartFavoritesReducer = favoritesSlice.reducer;
export const { addToFavorites, removefavorites } = favoritesSlice.actions;
