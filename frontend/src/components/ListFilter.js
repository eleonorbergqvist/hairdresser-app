import React from 'react';
import DownArrowGold from '../img/DownArrowGold.svg';
import './ListFilter.css';

const ListFilter = ({ minRange, maxRange, onChange }) => {
  const ranges = [
    [[0, 999999], "Visa alla"],
    [[0, 249], "Pris 0-249 kr"],
    [[250, 499], "Pris 250-499 kr"],
    [[500, 999999], "Pris 500+ kr"],
  ]

  const handleSelectChange = (event) => {
    const index = event.target.value

    onChange({
      min: ranges[index][0][0],
      max: ranges[index][0][1],
    })
  }

  let currentIndex = ranges.findIndex(
    x => minRange === x[0][0] && maxRange === x[0][1]
  )

  return (
    <div>
      <div className="ListFilter">
        <div className="ListFilter__Header">{ranges[currentIndex][1]}</div>
        <select className="ListFilter__Select" value={currentIndex} onChange={handleSelectChange}>
          {ranges.map((x, index) => <option key={index} value={index}>{x[1]}</option>)}
        </select>
        <img className="ListFilter__Arrow" src={DownArrowGold} alt="" />
      </div>
    </div>
  );
}

export default ListFilter;

