import React from 'react';
import './Name.css'
const Name = (props) => {
    const { singleName } = props;
    return (
        // cart added name when i clicked 
        <div className="cart-name">
            <p>{singleName}<i className="fas fa-times name-icon"></i></p>
        </div>
    );
};
export default Name;