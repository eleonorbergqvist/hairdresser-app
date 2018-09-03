import React, { Component } from 'react';
import HairdresserList from '../components/HairdresserList';
import ListHeader from '../components/ListHeader';
import ListFilter from '../components/ListFilter';
import hairdressersData from '../data/hairdressers.json';

class HairdresserListContainer extends Component {
  state = {
    minRange: 0,
    maxRange: 999999,
  }

  handleFilterChange = ({ min, max }) => {
    this.setState({
      minRange: min,
      maxRange: max,
    })
  }

  filterHairdressersByRange(items) {
    return items.filter(
      x => x.price >= this.state.minRange && x.price <= this.state.maxRange
    )
  }

  render() {
    const hairdressers = this.filterHairdressersByRange(hairdressersData);

    return (
      <div>
        <ListHeader />
        <ListFilter 
          minRange={this.state.minRange} 
          maxRange={this.state.maxRange} 
          onChange={this.handleFilterChange}
        />

        <HairdresserList 
          items={hairdressers} 
        />
      </div>
    );
  }
}

export default HairdresserListContainer;