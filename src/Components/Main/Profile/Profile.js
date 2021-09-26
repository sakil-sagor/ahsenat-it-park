import React from 'react';
import './Profile.css'
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Profile = (props) => {

    const element = <FontAwesomeIcon icon={faShoppingCart} />

    const { name, img, role, rating, review, salary, country } = props.profile;
    // console.log(props.profile);

    


    return (
        <div className="profile">
            <div className="profile-img">
                <img src={img} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <p><small>{role}</small></p>
            </div>
            <div>
                <h4>Country : {country}</h4>
            </div>
            <div>
                <p className="rating">
                    <Rating
                        initialRating={rating}
                        readonly
                        emptySymbol="far fa-star star-icon"
                        fullSymbol="fas fa-star star-icon"
                    >
                    </Rating> ({review})
                </p>
            </div>
            <div>
                <div>
                    <h4>Starting at :${salary} </h4>
                </div>
                <div>
                    <button onClick={() => props.hireMe(props.profile)} >{element} Hire Me</button>
                </div>
            </div>








        </div>
    );
};

export default Profile;