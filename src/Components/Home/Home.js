import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTShirts from '../Hooks/useTShirt';
import TShirt from '../TShirt/TShirt';
import './Home.css';


const Home = () => {
    const [tShirts, setTShirts] =useTShirts();
    const [cart, setCart]= useState([]);



    const handleAddToCart = (selectedItem)=>{
        const exist = cart.find(tShirt=>tShirt._id=== selectedItem._id);
        if(!exist){
            const newCart = [...cart, selectedItem]
            setCart(newCart);
        }
        else{
            alert('item already added');
        }
    }
        // console.log(selectedItem);
        // tShirt component a click korar por IdleDeadline, name etc soho pauar por ekhon ei dhape cart a add korte hobe 
        // console log uthiye deya holo 
        // ejonno ekta new array toiri hobe puranoi ta copy kore 
 


// (cart a already product ta ache kina ta bujhar jonno const exist logic emplement kora holo
// new cart er upore)
        // ekhon newCart j paua gelo seta k cart component a dekhate hobe 
   
    // (selectedItem or clickedItem or tShirtSelected naam o deya jay)
    
    const handleRemoveFromCart =(selectedItem)=>{
             const rest = cart.filter(tShirt => tShirt._id!== selectedItem._id);
             setCart(rest);
    }
    
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tShirts.map(tShirt=><TShirt 
                        key={tShirt._id} 
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    
                    ></TShirt>)
                }

            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;