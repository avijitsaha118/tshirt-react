import React from 'react';
import './Cart.css';

const cart = ({cart, handleRemoveFromCart}) => {
//   conditionl rendering option 4ta-
//   1. element variable
// 2. tenary operator
// 3. and operator / shorthand 
// 4. mittha hole jabe ||
  
let command;
  if(cart.length===0){
      command=<p>Please add some items</p>
  }
  else if(cart.length===1){
      command=<p>
          Please add more...
      </p>
  }
  else{
      command=<p>Thanks for adding item</p>
  }
  
  
  
    return (
        <div>
            <h2>Item Selected: </h2>
           
               {
                  cart.map(tShirt=><p>
                      
                      {tShirt.name}
                      <button onClick={()=> handleRemoveFromCart(tShirt)}>Remove</button>
                      </p>)
               }    

               {cart.length===0 || <p className='orange'>Yes! you are buying!</p> }
                
       {cart.length===3 && 
          <div className='orange'> 
           <h3>Trigonal</h3>
           <p>hi, Tin jon k ki gift dibe? then add one for me also</p>
           </div>
       }

                {command}     
             
             {cart.length !==4?<p>Keep adding</p> : <button>Remove all</button>}
              {cart.length===4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default cart;