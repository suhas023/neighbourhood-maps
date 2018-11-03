import React, { Component } from 'react';
import Marker from '../Marker/Marker';
import './Map.css';
import mapStyle from './mapStyle';

class Map extends Component {

  state = {
    mapLoaded: false
  }

  showInfoWindow = (marker, restaurant, info) => {
    this.infoWindow.setContent(info);
    this.infoWindow.setAnchor(marker);
    this.props.onSelectRestaurant(restaurant.id);
  }

  componentDidMount() {
    // Once the Google Maps API has finished loading, initialize the map
    this.props.loadGoogleMaps().then((google) => {
      let mapState = {
        zoom: 15,
        center: {lat: 40.732013, lng: -73.996155},
        styles : mapStyle
      }
      let mapDOM = document.getElementById('map');
      this.map = new google.maps.Map(mapDOM, mapState);
      this.infoWindow = new google.maps.InfoWindow();
      // deselect the restaurant when infowindow is closed 
      google.maps.event.addListener(this.infoWindow, 'closeclick', () => {  
        this.props.onSelectRestaurant(null);
    });  
      // set mapLoaded state to true
      this.setState({mapLoaded: true});
    });
  }

  render() {
    return (
      <div id="map">
        {
          this.state.mapLoaded ? 
            this.props.places.map(({restaurant}) => 
              <Marker 
                key={restaurant.id}
                restaurant={restaurant}
                map={this.map} 
                onShowInfoWindow={this.showInfoWindow}
                selected={this.props.selected}
              />
            ) : false
        }
      </div>
    );
  }
}

export default Map;