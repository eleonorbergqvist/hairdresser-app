import React from 'react';
import ListItem from './ListItem';

const HairdresserList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => <ListItem key={index} {...item} />)}
    </div>
  );
}

export default HairdresserList;