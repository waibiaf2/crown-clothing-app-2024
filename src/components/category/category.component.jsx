import './category.component.styles';

import React, {useContext, useEffect, useState} from 'react';
import {CategoriesContext} from "../../contexts/categories.context";
import {useParams} from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import {CategoryContainer,Title} from "./category.component.styles";

const CategoryComponent = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {
                    products &&
                    products.map(
                        (product) => <ProductCard key={product.id} product={product}/>
                    )
                }
            </CategoryContainer>
        </>
    );
};

export default CategoryComponent;