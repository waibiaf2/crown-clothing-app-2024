import React from 'react';
import CategoriesComponent from "../../components/categories-preview/categories.component";
import {useSelector} from "react-redux";
import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/category/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreviewComponent = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <>
            {
                isLoading ?
                    <Spinner/> :
                    (Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title];
                        return <CategoriesComponent key={title} title={title} products={products}/>
                    }))
            }
        </>
    );
};

export default CategoriesPreviewComponent;