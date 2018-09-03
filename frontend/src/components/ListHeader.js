import React from 'react';
import LeftArrowGold from '../img/LeftArrowGold.svg'; 
import Settings from '../img/Settings.svg';
import './ListHeader.css'; 

const ListHeader = (_props) => {
  return (
    <div className="ListHeader">
      <img src={LeftArrowGold} alt="" />
      <h1>Hår</h1>
      <img src={Settings} alt="" />
    </div>
  );
}

export default ListHeader;