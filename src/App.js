import React, { Component } from 'react';
import Aside from './components/aside/Aside';
import Map from './components/map/Map';
import Error from './components/error/Error';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      filteredRestaurants: [],
      selectedRestaurantID: null,
      query: '',
      err: []
    }
    // Start Google Maps API loading since we know we'll soon need it
    this.getGoogleMaps();
    //handle Google Map's API error
    window.gm_authFailure = this.gm_authFailure;
  }

  gm_authFailure = () => {
    this.setState((prevState) => {
      return {err: [...prevState.err, 'Google Map Authorization Failed']};
    });
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
    if(this.state.selectedRestaurantID !== id)
      this.setState({selectedRestaurantID: id});
  }

  updateQuery = (query) => {
    this.setState((prevState) => {
      let filteredRestaurants = prevState.restaurants.filter(({restaurant}) => restaurant.name.toLowerCase().includes(query));
      return {query, filteredRestaurants};
    });
  }

  //Get restaurant data from Zomato
  componentDidMount() {
    fetch('https://developers.zomato.com/api/v2.1/geocode?lat=40.732013&lon=-73.996155', {
      headers: {
        "user-key": "0cdefc6dcd10b52bdd01175c3cdf4744",
        "Accept": "application/json"
      }
    })
    .then(res => {
      if(res.status !== 200)
        throw(res);
      return res.json();
    })
    .then(json => this.setState({restaurants: json.nearby_restaurants, filteredRestaurants: json.nearby_restaurants}))  
    .catch(err => {
      this.setState((prevState) => {
        return {err: [...prevState.err, ' fetching restaurants']};
      });
      console.log(err); 
    });
  }

  render() {    
    return (
      <main>
        {
          this.state.err.length ? <Error errorMessage = {this.state.err.join(', ')} /> : false
        }
        <Aside 
          places={this.state.filteredRestaurants}
          selectedID={this.state.selectedRestaurantID}
          query={this.state.query}
          onSelectRestaurant={this.selectRestaurant} 
          onUpdateQuery={this.updateQuery}
        />
        <Map 
          places={this.state.filteredRestaurants} 
          selectedID={this.state.selectedRestaurantID}
          onSelectRestaurant={this.selectRestaurant}
          onDisplayGoogleMaps={this.getGoogleMaps} 
        />
      </main>
    );
  }
}

export default App;
