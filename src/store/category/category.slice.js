import {createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null
}

export const categorySlice = createSlice({
    name: "categories",
    initialState: INITIAL_STATE,
    reducers: {
        fetchCategoriesStart: (state, action) => {
            state.isLoading = true;
        },
        fetchCategories: (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
        },
        fetchCategoriesFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {
    fetchCategories,
    fetchCategoriesStart,
    fetchCategoriesFailed
} = categorySlice.actions;

export const categoriesReducer = categorySlice.reducer;
