import React, { Component } from 'react';
import Aside from './components/aside/Aside';
import Map from './components/map/Map';
import './App.css';

class App extends Component {

  state = {
    restaurants: [],
    clicked: null,
    query: ''
  }

  getGoogleMaps = () => {
    // If we haven't already defined the promise, define it
    if (!this.googleMapsPromise) {
      this.googleMapsPromise = new Promise((resolve) => {
        // Add a global handler for when the API finishes loading
        window.resolveGoogleMapsPromise = () => {
          // Resolve the promise
          resolve(window.google);
          // Tidy up
          delete window.resolveGoogleMapsPromise;
        };

        // Load the Google Maps API
        const script = document.createElement("script");
        const API = 'AIzaSyDA9RLo-1ZBGb-eQRBPWUpIB-Z97cuiZTM';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
        script.async = true;
        document.body.appendChild(script);
      });
    }
    // Return a promise for the Google Maps API
    return this.googleMapsPromise;
  }

  selectRestaurant = (id) => {
    if(this.state.clicked !== id)
      this.setState({clicked: id});
  }

  updateQuery = (query) => {
    this.setState({query});
  }

  componentWillMount() {
    // Start Google Maps API loading since we know we'll soon need it
    this.getGoogleMaps();
  }

  //Get restaurant data from zomato
  componentDidMount() {
    fetch('https://developers.zomato.com/api/v2.1/geocode?lat=40.732013&lon=-73.996155', {
      headers: {
        "user-key": "0cdefc6dcd10b52bdd01175c3cdf4744",
        "Accept": "application/json"
      }
    })
    .then(res => {
      if(res.status !== 200)
        throw(res.statusText);
      return res.json();
    })
    .then(json => this.setState({restaurants: json.nearby_restaurants}))  
    .catch(err => console.log(`ERR! ${err}`));
  }

  render() {
    return (
      <main>
        <Aside 
          places={this.state.restaurants}
          selected={this.state.clicked}
          query={this.state.query}
          onSelectRestaurant={this.selectRestaurant} 
          onUpdateQuery={this.updateQuery}
        />
        <Map 
          places={this.state.restaurants} 
          loadGoogleMaps={this.getGoogleMaps} 
          selected={this.state.clicked}
          onSelectRestaurant={this.selectRestaurant}
        />
      </main>
    );
  }
}

export default App;
