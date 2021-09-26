import React, { useState } from 'react';
import './Cart.css'
import Name from './Name/Name';

const Cart = (props) => {
    // data Destructuring for data props  
    const { cart } = props;

    // makign data unique 
    let duplicate = [...new Set(cart)];

    // make unique data for cart 
    let total = 0;
    let nameResult = [];
    let nameImg = [];
    for (let price of duplicate) {
        total = total + price.salary;
        nameResult.push(price.name);
        nameImg.push(price.img);
    }
    return (
        <div className="cart">
            <h3>Developer Hired : {duplicate.length}</h3>
            <hr />
            <div className="cart-name-img">
                <div>
                    {
                        nameResult.map(singleName => <Name key={singleName} singleName={singleName}></Name>)
                    }
                </div>
            </div>
            <div className="cost-area">
                <h3>Total Cost: ${total}</h3>
                <button className="order-btn">Make Order</button>
            </div>


        </div>
    );
};

export default Cart;