import './category.component.styles.scss';

import React, {useContext} from 'react';
import {CategoriesContext} from "../../contexts/categories.context";
import {useParams} from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

const CategoryComponent = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);

    const products = categoriesMap[category];

    return (
        <>
            <h1>{category.toUpperCase()}</h1>
            <div className="category-container">
                {
                    products.map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </>
    );
};

export default CategoryComponent;