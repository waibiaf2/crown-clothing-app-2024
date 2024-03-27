import {Route, Routes} from "react-router-dom";

import './shop.styles.scss';

import CategoriesPreviewComponent from "../categories-preview/categories-preview.component";
import CategoryComponent from "../../components/category/category.component";


const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreviewComponent/>}/>
            <Route path=":category" element={<CategoryComponent/>}/>
        </Routes>
    )
}

export default Shop;