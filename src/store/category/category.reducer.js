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

export const categoryReducer = categorySlice.reducer;

/*
export const categoryReducer = (state = INITIAL_STATE, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case CATEGORY_TYPES.FETCH_CATEGORIES_START:
            return {...state, isLoading: true};
        case CATEGORY_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
                isLoading: false
            }
        case CATEGORY_TYPES.FETCH_CATEGORIES_FAILED:
            return {...state, isLoading: false, error: payload};
        default:
            return state;
    }

};*/
