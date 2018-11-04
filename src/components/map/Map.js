import React, { Component } from 'react';
import Marker from '../Marker/Marker';
import './Map.css';
import mapStyle from './mapStyle';

class Map extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mapLoaded: false
    }
    this.map = null;
    this.infoWindow = null;
  }

  showInfoWindow = (marker, restaurant, info) => {
    this.infoWindow.setContent(info);
    this.infoWindow.setAnchor(marker);
    this.props.onSelectRestaurant(restaurant.id);
  }

  componentDidMount() {
    // Once the Google Maps API has finished loading, initialize the map
    this.props.onDisplayGoogleMaps().then((google) => {
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
      <div id="map" aria-label="map location"  role="application">
        {
          this.state.mapLoaded && this.props.places ? 
            this.props.places.map(({restaurant}) => 
              <Marker 
                key={restaurant.id}
                restaurant={restaurant}
                map={this.map}
                selectedID={this.props.selectedID}
                onShowInfoWindow={this.showInfoWindow}
              />
            ) 
          : false
        }
      </div>
    );
  }
}

export default Map;