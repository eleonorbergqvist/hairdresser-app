import React from 'react';
import IconGeo from '../img/IconGeo.svg';
import IconTime from '../img/IconTime.svg';
import IconPhone from '../img/IconPhone.svg';
import IconWeb from '../img/IconWeb.svg';
import './DetailInfo.css';

const DetailInfo = ({ address, closingTime, phone, url, description }) => {
  return (
    <div className="DetailInfo">
      <div className="DetailInfo__Space">
      </div>
      <div className="DetailInfo__Paragraph">
        <img className="DetailInfo__Icon" src={IconGeo} alt="Geo" />
        <p className="DetailInfo__Text">{address}</p>
      </div>
      <div className="DetailInfo__Paragraph">
        <img className="DetailInfo__Icon" src={IconTime} alt="Time" />
        <p className="DetailInfo__Text">Öppet till {closingTime} idag</p>
      </div>
      <div className="DetailInfo__Paragraph">
        <img className="DetailInfo__Icon" src={IconPhone} alt="Phone" />
        <p className="DetailInfo__Text">{phone}</p>
      </div>
      <div className="DetailInfo__Paragraph">
        <img className="DetailInfo__Icon" src={IconWeb} alt="Web" />
        <p className="DetailInfo__Text">{url}</p>
      </div>
      <div className="DetailInfo__Paragraph">
        <p className="DetailInfo__Text">{description}</p>
      </div>
    </div>
  );
}

export default DetailInfo;