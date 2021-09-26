import React from 'react';
import './Category.css'

const Category = () => {
    return (
        <div className="header-bottom">
            {/* header category area  */}
            <div className="category">
                <ul>
                    <li><a href="">JAVASCRIPT</a></li>
                    <li><a href="">PHP</a></li>
                    <li><a href="">PYTHON</a></li>
                    <li><a href="">C</a></li>
                    <li><a href="">C++</a></li>
                    <li><a href="">RUBY</a></li>
                    <li><a href="">TYPESCRIPT</a></li>
                    <li><a href="">GO</a></li>
                    <li><a href="">JAVA</a></li>
                </ul>
            </div>
            {/* header summary area  */}
            <div className="header-content">
                <h2>Make your Team or Hire your Favourite Developer.</h2>
                <h3>Total Hired : $150 million</h3>
                <h3>Total Seller : 27520, Total Buyer: 1.5 million</h3>
            </div>
        </div>
    );
};

export default Category;