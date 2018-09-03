import React from 'react';
import { Link } from 'react-router-dom';
import LeftArrow from '../img/LeftArrow.svg';
import Heart from '../img/Heart.svg';
import Ratings from '../img/Ratings.svg';
import './DetailHeader.css'; 


const DetailHeader = (props) => {
  return (
    <div className="DetailHeader">
      <div className="DetailHeader__Buttons">
        <Link to='/'><img src={LeftArrow} alt="Back" /></Link>
        <img src={Heart} alt="" />
      </div>
      <h1 className="DetailHeader__Title">{props.title}</h1>
      <div className="DetailHeader__Ratings">
        <img className="DetailHeader__RatingsImage" src={Ratings} alt="" />
        <p className="DetailHeader__RatingsCount" >({props.ratingsCount})</p>
      </div>
    </div>
  );
}

export default DetailHeader;