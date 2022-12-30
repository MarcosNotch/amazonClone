import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: "basket",
    initialState: {
        items: [],
    },
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.basket, action.payload];
        }
    },
});


export const selectItems = (state) => state.basket.items;

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;