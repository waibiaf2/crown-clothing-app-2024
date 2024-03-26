import {useContext} from "react";
import {Route, Routes, useParams} from "react-router-dom";

import './shop.styles.scss';

import {ProductsContext} from "../../contexts/products.context";
import CategoriesPreviewComponent from "../categories-preview/categories-preview.component";
import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";



const Shop = () => {
    const {category} = useParams();

    return (
        <Routes>
            <Route index element={<CategoriesPreviewComponent/>} />
            <Route path=":category" element={<CategoryPreviewComponent/>} />
        </Routes>
    )
}

export default Shop;