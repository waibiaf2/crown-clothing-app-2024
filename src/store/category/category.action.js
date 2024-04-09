import {createAction} from "../../utils/reducer/reducer.utils";
import {CATEGORY_TYPES} from "./category.types";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

/*
export const setCategories = (categoriesArray) => createAction(CATEGORY_TYPES.SET_CATEGORIES, categoriesArray);
*/

const fetchCategoriesStarted = () => createAction("FETCH_CATEGORIES_STARTED");

const fetchCategoriesSuccess = (categoriesArray) => createAction("FETCH_CATEGORIES_SUCCESS", categoriesArray);

const fetchCategoriesFailed = (error) => createAction("FETCH_CATEGORIES_FAILED", error);

export const fetchCategoriesAsync = () => async (dispatch) =>{
    dispatch(fetchCategoriesStarted());
    try {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoriesArray));
    }catch(error){
        dispatch(fetchCategoriesFailed(error));
    }
}