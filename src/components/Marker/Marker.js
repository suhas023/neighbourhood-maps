import  { Component } from 'react';
import './Marker.css';

class Marker extends Component {

  constructor(props) {
    super(props);
    let {restaurant, map} = props;
    const uluru = {lat: parseFloat(restaurant.location.latitude), lng: parseFloat(restaurant.location.longitude)};
    const marker = new window.google.maps.Marker({
      position: uluru,
      map: map
    });

    marker.addListener("click", this.displayInfo);
    this.marker = marker;

    this.state = {restaurant};
  }

  displayInfo = () => {
    let {restaurant} = this.props;
    let info = `
    <div class="info-window"
      <h3>
        <a href="${restaurant.url}" target="_blank">${restaurant.name}</a>
      </h3>
      <img src="${restaurant.featured_image}" alt="restaurant image"
      <span>
        Rating: ${restaurant.user_rating.aggregate_rating} / 5  ${restaurant.user_rating.rating_text} ${restaurant.user_rating.votes} votes 
      </span>
    </div>
    `;
    
    // call parent's function to display 
    this.props.onShowInfoWindow(this.marker, restaurant, info)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.selected === this.state.restaurant.id && this.props.selected !== nextProps.selected) {
      this.setState({selected: true});
      this.displayInfo();
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    this.marker.setMap(null);
  }
  render() {
    return false;
  }
}

export default Marker;
