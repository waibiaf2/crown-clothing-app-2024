import {Route, Routes} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import './shop.styles.scss';

import {fetchCategories, fetchCategoriesFailed} from "../../store/category/category.reducer";

import CategoriesPreviewComponent from "../categories-preview/categories-preview.component";

import CategoryComponent from "../category/category.component";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        // dispatch(fetchCategoriesStart());
        try {
            const getCategories = async () => {
                const categoriesArray = await getCategoriesAndDocuments();
                dispatch(fetchCategories(categoriesArray));
            }
            getCategories();
        }catch (e) {
            dispatch(fetchCategoriesFailed(e))
        }
    },[]);

    return (
        <Routes>
            <Route index element={<CategoriesPreviewComponent/>}/>
            <Route path=":category" element={<CategoryComponent/>}/>
        </Routes>
    )
}

export default Shop;