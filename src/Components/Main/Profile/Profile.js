import React from 'react';
import './Profile.css'
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons'

const Profile = (props) => {
    // font awesome icon 
    const element = <FontAwesomeIcon icon={faHandsHelping} />
    // data props by Destructuring 
    const { name, img, role, rating, review, salary, country } = props.profile;
    return (
        // all profile html here
        <div className="profile">
            <div className="profile-img">
                <img src={img} alt="" />
            </div>
            <h2 className="profile-name">{name}</h2>
            <small className="role">{role}</small>

            <div>
                <h4 className="country">From : {country}</h4>
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
                <h3>Projects - <i class="fab fa-github social-icon"></i><i class="fab fa-linkedin-in social-icon"></i></h3>
            </div>
            <div>
                <div>
                    <h3>Starting at : <small className="salery"> ${salary}</small> </h3>
                </div>
                <div>
                    <button onClick={() => props.hireMe(props.profile)} >{element} Hire Me</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;