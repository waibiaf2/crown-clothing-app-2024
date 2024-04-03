import {Route, Routes} from "react-router-dom";

import './shop.styles.scss';

import CategoriesPreviewComponent from "../categories-preview/categories-preview.component";
import CategoryComponent from "../../components/category/category.component";
import {useEffect} from "react";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {useDispatch} from "react-redux";
import {setCategories} from "../../store/category/category.action";


const Shop = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesMap));
        }

        getCategoriesMap();
    },[]);

    return (
        <Routes>
            <Route index element={<CategoriesPreviewComponent/>}/>
            <Route path=":category" element={<CategoryComponent/>}/>
        </Routes>
    )
}

export default Shop;