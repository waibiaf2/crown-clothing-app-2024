import React, {useContext} from 'react';
import {CategoriesContext} from "../../contexts/categories.context";
import CategoriesComponent from "../../components/categories-preview/categories.component";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/category/category.selector";

const CategoriesPreviewComponent = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    console.log(categoriesMap);

    return (
        <>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return <CategoriesComponent key={title} title={title} products={products}/>
                })
            }
        </>
    );
};

export default CategoriesPreviewComponent;