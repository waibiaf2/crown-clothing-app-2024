import React, {useContext} from 'react';
import {Link} from "react-router-dom";

import './categories.styles.scss';

import ProductCard from "../product-card/product-card.component";

const CategoriesComponent = ({title, products}) => {
    return (
        <div className="category-preview-container">
           <h2 className="title">
               <Link to={`/shop/${title.toLowerCase()}`}>
                   {title.toUpperCase()}
               </Link>
           </h2>
            <div className="preview">
                {
                    products.filter((_,idx) => idx < 4)
                        .map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default CategoriesComponent;