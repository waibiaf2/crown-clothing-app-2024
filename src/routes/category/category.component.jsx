import './category.component.styles';

import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import {CategoryContainer, Title} from "./category.component.styles";
import {useSelector} from "react-redux";
import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/category/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoryComponent = () => {
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    console.log('IsLoading from the category component', isLoading);

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            {
                !isLoading ?
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
                    </>:
                    <Spinner/>
            }
        </>
    );
};

export default CategoryComponent;