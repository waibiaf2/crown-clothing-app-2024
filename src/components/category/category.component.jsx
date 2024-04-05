import './category.component.styles';

import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import {CategoryContainer, Title} from "./category.component.styles";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/category/category.selector";

const CategoryComponent = () => {
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);

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