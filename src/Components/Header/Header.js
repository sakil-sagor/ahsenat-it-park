import React from 'react';
import Category from './Category/Category ';
import Menu from './Menu/Menu';
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                {/* header logo and menu area  */}
                <Menu></Menu>
                {/* header category and summery area  */}
                <Category></Category>
            </div>
        </div>
    );
};

export default Header;