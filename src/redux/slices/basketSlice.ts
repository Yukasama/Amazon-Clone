"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state: any, action: any) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state: any, action: any) => {
      const index = state.items.findIndex(
        (basketItem: Product) => basketItem.id === action.payload.id
      );

      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state: any) => state.basket.items;
export const selectTotal = (state: any) =>
  state.basket.items.reduce(
    (total: number, item: Product) => total + item.price,
    0
  );

export default basketSlice.reducer;
