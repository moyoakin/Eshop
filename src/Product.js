import React from 'react';
import "./Product.css";

function Product({id,title,image,price,rating}){
    return(
        <div>
            <div className="product">
                <div className="product_info">
                    <p>{title}</p>
                    <div className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                    </div>
                    <div className="product_rating">
                        {Array(rating)
                        .fill()
                        .map((_,i)=>( <p> ☆ </p>

                        )

                        )
                        }
                    </div>
                </div>
                <img src={image} alt="" />
                <button>Add to basket</button>
            </div>
        </div>
    )
}

export default Product;