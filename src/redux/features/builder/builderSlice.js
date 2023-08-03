import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const builderSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    addToBuild: (state, action) => {
      
      const existing = state.products.find(
        (product) => product.category === action.payload.category
      );
      if (!existing) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        existing.quantity = existing.quantity + 1;
      }
    },
  },
});

export const { addToBuild } = builderSlice.actions;

export default builderSlice.reducer;
