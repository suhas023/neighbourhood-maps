import React from 'react';
import { Component } from 'react';
import './Aside.css';

class Aside extends Component {

  updateQuery = (e) => {
    this.props.onUpdateQuery(e.target.value);
  }

  render() {
    let {places} = this.props; 
    return (
      <aside>
        <input
          placeholder="Filter"
          value={this.props.query}
          onChange={this.updateQuery}
        />
        <ul>
          {
            places.map(({restaurant}) => 
              <li key={restaurant.id}>
                <span 
                className={restaurant.id === this.props.selected ? "highlight": "none"}
                onClick={() => this.props.onSelectRestaurant(restaurant.id)}
                >
                  {restaurant.name}
                </span>
              </li>)
          }
        </ul>
      </aside>
    );
  }
}

export default Aside;