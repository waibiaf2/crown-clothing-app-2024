import React, {useContext} from 'react';
import {CategoriesContext} from "../../contexts/categories.context";
import CategoriesComponent from "../../components/categories-preview/categories.component";

const CategoriesPreviewComponent = () => {
    const {categoriesMap} = useContext(CategoriesContext);
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