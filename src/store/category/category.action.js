import {createAction} from "../../utils/reducer/reducer.utils";
import {CATEGORY_TYPES} from "./category.types";

export const setCategories = (categoriesMap) => createAction(CATEGORY_TYPES.SET_CATEGORIES, categoriesMap);
