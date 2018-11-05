# Neighbourhood Map
Neighbourhood Map is a single page application that locates nearby restaurants.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)

## Installation
Note: To use ServiceWorker head down to [Build](#build) section. 
Type the following commands in your terminal:

```
git clone <url of this repo>
cd neighborhood-map
npm install
npm start
```

## Usage

### Overview

The app uses Google Maps to render a map and Zomato API to get the restaurants along with their details.

### Marker
- Each restaurant is rendered on the map with a marker.
- User can click on the marker to reveal more details in a infoWindow.

### InfoWindow
Contains
- Name of the restaurant.
- Image of the restaurant.
- Rating out of 5.
- Number of votes.

### Sidebar
- The restaurants are also maintained in a sidebar as list items.
- When clicked, infoWindow is displayed for that restaurant.
- A textbox is present to filter the restaurants.

### ServiceWorker

The Application also uses ServiceWorker which works in the build mode only.
To test ServiceWorker, you must make a prdouction build first. 

### Build
In terminal type
```
npm run build
serve -s build
```
open browser at `localhost:5000` and ServiceWorker can be tested in chrome dev tools.


## Screenshot
![sample shot](/screenshots/sample.png?raw=true)