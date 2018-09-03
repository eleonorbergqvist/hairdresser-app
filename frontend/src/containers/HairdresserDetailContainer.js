import React, {Component} from 'react';
import DetailHeader from '../components/DetailHeader';
import DetailNav from '../components/DetailNav';
import DetailInfo from '../components/DetailInfo';
import hairdressersData from '../data/hairdressers.json';

class HairdresserDetailContainer extends Component {
  render() {
    const id = Number(this.props.match.params.id);
    let hairdresser = hairdressersData.filter(item => item.id === id);
    hairdresser = hairdresser[0];

    return (
      <div>
        <DetailHeader 
          title={hairdresser.name} 
          image={hairdresser.image} 
          rating={hairdresser.rating} 
          ratingsCount={hairdresser.ratingsCount}
        />
        <DetailNav active={"info"}/>
        <DetailInfo 
          address={hairdresser.address} 
          closingTime={hairdresser.closingTime} 
          phone={hairdresser.phone} 
          url={hairdresser.url} 
          description={hairdresser.description} 
        />
      </div>
    );
  }
}

export default HairdresserDetailContainer;