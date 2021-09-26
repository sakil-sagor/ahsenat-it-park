import React, { useEffect, useState } from 'react';
import Profile from './Profile/Profile';
import './Main.css'
import Cart from './Cart/Cart';

const Main = () => {

    const [profiles, setProfiles] = useState([]);
    const [cart, setCart] = useState([]);
    // data call form json file 
    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(response => response.json())
            .then(data => setProfiles(data))
    }, []);

    // spread operator for data 
    let hireMe = (profile) => {
        let newCart = [...cart, profile]
        setCart(newCart);
    }

    return (
        <div className="main-area container">
            {/* all seller area  */}
            <div className="all-profile">
                {
                    profiles.map(profile => <Profile key={profile.id} hireMe={hireMe} profile={profile}></Profile>)
                }
            </div>
            {/* order cart area  */}
            <div className="cart-area">
                <div>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div >
    );
};

export default Main;