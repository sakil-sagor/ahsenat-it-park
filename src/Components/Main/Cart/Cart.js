import React, { useState } from 'react';
import './Cart.css'
import Name from './Name/Name';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);

    let duplicate = [...new Set(cart)];
    console.log(duplicate);

    // let result = [];
    // let addedProfile = cart.map(sameItem => {
    //     if (result.indexOf(sameItem.name) == -1) {
    //         result.push(sameItem.name)
    //     }
    // })

    let total = 0;
    let nameResult = [];
    for (let price of duplicate) {
        total = total + price.salary;
        nameResult.push(price.name);
    }





    return (
        <div className="cart">
            <h3>Total Hired : {duplicate.length}</h3>
            <div>
                {
                    nameResult.map(singleName => <Name key={singleName} singleName={singleName}></Name>)
                }
            </div>
            <h3>Total Cost: {total}</h3>


        </div>
    );
};

export default Cart;