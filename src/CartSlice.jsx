import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      if (item) {
        const existingItem = state.items.find(x => x.name === item.name);
        if (existingItem) {
          existingItem.quantity++;
        }
        else {
          state.items.push({ ...item, quantity: 1 });

        }}


    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);


    },
    updateQuantity: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(x => x.name === item.name);
        if (existingItem) {
          existingItem.quantity = action.payload.quantity;
        }else{state.items.push({ ...item, quantity: 1 });}

    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
