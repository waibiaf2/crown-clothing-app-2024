import {createAction} from "../../utils/reducer/reducer.utils";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {CATEGORY_TYPES} from "./category.types";

export const fetchCategoriesStart = () => createAction(CATEGORY_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORY_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) => createAction(CATEGORY_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }
}