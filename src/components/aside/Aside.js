import React, { Component } from 'react';
import './Aside.css';
import Icon from '@material-ui/core/Icon';


class Aside extends Component{

  constructor(props) {
    super(props)
    this.state = {
      showList: true,
    }
  }

  updateQuery = (e) => {
    this.props.onUpdateQuery(e.target.value.trimLeft().toLowerCase());
  }

  toggleShowList = () => {
    this.setState((prevState) => {
      return {showList: !prevState.showList}
    });
  }

  handleItemClick = (restaurant) => {
    if(window.innerWidth < 600)
      this.toggleShowList();
    this.props.onSelectRestaurant(restaurant.id);
  }

  render() {
    let asideHeight = this.state.showList ? "full-height" : "min-height";
    let containerState = this.state.showList ? "show" : "hide";
    return (
      <aside className={asideHeight}>
        <div className={containerState + " container"}>
          <input
            aria-label="filter restaurants" 
            role="search"
            autoFocus
            placeholder="Filter"
            value={this.props.query}
            onChange={this.updateQuery}
          />
          <ul role="listbox" aria-label="restaurants" aria-activedescendant="0" tabIndex="0">
            {
              this.props.places.map(({restaurant}, index) => 
                <li key={restaurant.id}>
                  <span
                    id={index}
                    role='listitem'
                    tabIndex="0"
                    className={restaurant.id === this.props.selectedID ? "highlight": "none"}
                    onClick={() => this.handleItemClick(restaurant)}
                    onKeyPress={() => this.handleItemClick(restaurant)}
                  >
                    {restaurant.name}
                  </span>
                </li>
              )
            }
          </ul>
        </div>
        <button className="toggle" onClick={this.toggleShowList} aria-label="menu">
            {
              this.state.showList ?  <Icon className="icon">arrow_drop_down</Icon> 
              : <Icon className="icon">arrow_drop_up</Icon>
            }
         
        </button>
      </aside>
    );
  }
}

export default Aside;