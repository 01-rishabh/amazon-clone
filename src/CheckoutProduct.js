import React from 'react'
import './checkoutProduct.css';
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, image, title, price, rating, hiddenButton}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} />
            
        <div className="checkoutProduct__info">
            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
            {!hiddenButton && (
                <button onClick={removeFromBasket}>Remove from basket</button>
            )}
            
        </div>
        </div>
    )
}


export default CheckoutProduct;
