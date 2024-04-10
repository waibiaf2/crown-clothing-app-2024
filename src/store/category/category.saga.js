import {takeLatest,put, all, call} from 'redux-saga/effects';
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {fetchCategoriesFailed, fetchCategoriesSuccess} from "./category.action";
import {CATEGORY_TYPES} from "./category.types";

/*
export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }
}
*/

export function* fetchCategoriesSagaAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield put(fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORY_TYPES.FETCH_CATEGORIES_START, fetchCategoriesSagaAsync);
}

export function* getCategoriesSaga() {
    yield all([
        call(onFetchCategories)
    ])
}
