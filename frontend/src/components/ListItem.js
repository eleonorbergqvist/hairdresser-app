import React from 'react';
import { Link } from "react-router-dom";
import RatingsSmall from '../img/RatingsSmall.svg';
import RightArrowGoldSmall from '../img/RightArrowGoldSmall.svg';
import './ListItem.css';

const ListItem = (props) => {
  const {
    appointmentTime,
    name,
    ratingsCount,
    address,
    price,
    serviceTimeMins,
    id
  } = props;

  return (
    <Link to={`/detail/${id}`} className="ListItem">
      <div className="ListItem__ColTime">
        <p className="ListItem__Time">{appointmentTime}</p>
      </div>
      <div className="ListItem__ColTitle">
        <h2 className="ListItem__Title">{name}</h2>
        <img className="ListItem__RatingsIcon" src={RatingsSmall} alt="" />
        <p className="ListItem__RatingsCount">({ratingsCount})</p>
        <p className="ListItem__Address">{address}</p>
      </div>
      <div className="ListItem__ColPrice">
        <p className="ListItem__Price">{price} kr</p>
        <p className="ListItem__Mins">{serviceTimeMins} min</p>
      </div>
      <div className="ListItem__ColButton">
        <img className="ListItem__Button" src={RightArrowGoldSmall} alt="" />
      </div>
    </Link>
  )
}

export default ListItem;