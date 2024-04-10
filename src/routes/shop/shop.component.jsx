import {Route, Routes} from "react-router-dom";

import './shop.styles.scss';

import CategoriesPreviewComponent from "../categories-preview/categories-preview.component";

import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchCategoriesStart} from "../../store/category/category.action";
import CategoryComponent from "../category/category.component";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchCategoriesStart());
    },[]);

    return (
        <Routes>
            <Route index element={<CategoriesPreviewComponent/>}/>
            <Route path=":category" element={<CategoryComponent/>}/>
        </Routes>
    )
}

export default Shop;