import React from 'react';
import './TShirt.css';

const TShirt = ({handleAddToCart, tShirt}) => {
    // const {handleAddToCart, tShirt} = props;
    // const {name, picture, price } = props.tShirt;
    const {name, picture, price } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt='imgname' />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;