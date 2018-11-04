import  { Component } from 'react';
import './Marker.css';

class Marker extends Component {

  constructor(props) {
    super(props);

    let {restaurant, map, selectedID} = props;
    const uluru = {lat: parseFloat(restaurant.location.latitude), lng: parseFloat(restaurant.location.longitude)};
    const marker = new window.google.maps.Marker({
      position: uluru,
      map: map,
    });

    marker.addListener("click", this.displayInfo);
    this.marker = marker;

    if(selectedID === restaurant.id)
      this.displayInfo();
  }

  displayInfo = () => {
    let {restaurant} = this.props;
    let info = `
    <div class="info-window"
      <h3>
        <a href="${restaurant.url}" target="_blank">${restaurant.name}</a>
      </h3>
      ${restaurant.featured_image ? `<img src="${restaurant.featured_image}" alt="restaurant image"` :''}      
      <span>
        Rating: ${restaurant.user_rating.aggregate_rating} / 5  ${restaurant.user_rating.rating_text} ${restaurant.user_rating.votes} votes
      </span>
      <span>
        <small>via Zomato</small>
      </span>
    </div>
    `;
    //bounce the marker once
    this.marker.setAnimation(window.google.maps.Animation.BOUNCE);
    setTimeout(() => this.marker.setAnimation(null), 1000);
    // call parent's function to display 
    this.props.onShowInfoWindow(this.marker, restaurant, info);
  }

  //display infow window if this restaurant is selected in list
  shouldComponentUpdate(nextProps) {
    if(nextProps.selectedID === this.props.restaurant.id && nextProps.selectedID !== this.props.selectedID) {
      this.displayInfo();
    }
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
