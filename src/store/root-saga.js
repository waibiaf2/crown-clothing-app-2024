import {call, all} from 'redux-saga/effects';
import {getCategoriesSaga} from "./category/category.saga";

export function* rootSaga() {
    yield all([
        call(getCategoriesSaga)
    ]);
}
