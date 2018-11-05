(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,n){},124:function(e,t,n){},126:function(e,t,n){},128:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(34),s=n.n(r),l=(n(42),n(24)),i=n(4),c=n(5),u=n(7),p=n(6),d=n(8),m=(n(44),n(23)),f=n.n(m),y=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).updateQuery=function(e){n.props.onUpdateQuery(e.target.value.trimLeft().toLowerCase())},n.toggleShowList=function(){n.setState(function(e){return{showList:!e.showList}})},n.handleItemClick=function(e){window.innerWidth<600&&n.toggleShowList(),n.props.onSelectRestaurant(e.id)},n.state={showList:!0},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showList?"full-height":"min-height",n=this.state.showList?"show":"hide";return o.a.createElement("aside",{className:t},o.a.createElement("div",{className:n+" container"},o.a.createElement("input",{"aria-label":"filter restaurants",role:"search",autoFocus:!0,placeholder:"Filter",value:this.props.query,onChange:this.updateQuery}),o.a.createElement("ul",{role:"listbox","aria-label":"restaurants","aria-activedescendant":"0",tabIndex:"0"},this.props.places.map(function(t,n){var a=t.restaurant;return o.a.createElement("li",{key:a.id},o.a.createElement("span",{id:n,role:"listitem",tabIndex:"0",className:a.id===e.props.selectedID?"highlight":"none",onClick:function(){return e.handleItemClick(a)},onKeyPress:function(){return e.handleItemClick(a)}},a.name))}))),o.a.createElement("button",{className:"toggle",onClick:this.toggleShowList,"aria-label":"menu"},this.state.showList?o.a.createElement(f.a,{className:"icon"},"arrow_drop_down"):o.a.createElement(f.a,{className:"icon"},"arrow_drop_up")))}}]),t}(a.Component),h=(n(122),function(e){function t(e){var n;Object(i.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).displayInfo=function(){var e=n.props.restaurant,t='\n    <div class="info-window"\n      <h3>\n        <a href="'.concat(e.url,'" target="_blank">').concat(e.name,"</a>\n      </h3>\n      ").concat(e.featured_image?'<img src="'.concat(e.featured_image,'" alt="restaurant ').concat(e.name,"'s image\">"):"","\n      <span>\n        Rating: ").concat(e.user_rating.aggregate_rating," / 5  ").concat(e.user_rating.rating_text," ").concat(e.user_rating.votes," votes\n      </span>\n      <span>\n        <small>via Zomato</small>\n      </span>\n    </div>\n    ");n.marker.setAnimation(window.google.maps.Animation.BOUNCE),setTimeout(function(){return n.marker.setAnimation(null)},1e3),n.props.onShowInfoWindow(n.marker,e,t)};var a=e.restaurant,o=e.map,r=e.selectedID,s={lat:parseFloat(a.location.latitude),lng:parseFloat(a.location.longitude)},l=new window.google.maps.Marker({position:s,map:o});return l.addListener("click",n.displayInfo),n.marker=l,r===a.id&&n.displayInfo(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.selectedID===this.props.restaurant.id&&e.selectedID!==this.props.selectedID&&this.displayInfo(),!1}},{key:"componentWillUnmount",value:function(){this.marker.setMap(null)}},{key:"render",value:function(){return!1}}]),t}(a.Component)),g=(n(124),n(36)),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).showInfoWindow=function(e,t,a){n.infoWindow.setContent(a),n.infoWindow.setAnchor(e),n.props.onSelectRestaurant(t.id)},n.state={mapLoaded:!1},n.map=null,n.infoWindow=null,n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.onDisplayGoogleMaps().then(function(t){var n={zoom:15,center:{lat:40.732013,lng:-73.996155},styles:g},a=document.getElementById("map");e.map=new t.maps.Map(a,n),e.infoWindow=new t.maps.InfoWindow,t.maps.event.addListener(e.infoWindow,"closeclick",function(){e.props.onSelectRestaurant(null)}),e.setState({mapLoaded:!0})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"map","aria-label":"map location",role:"application"},!(!this.state.mapLoaded||!this.props.places)&&this.props.places.map(function(t){var n=t.restaurant;return o.a.createElement(h,{key:n.id,restaurant:n,map:e.map,selectedID:e.props.selectedID,onShowInfoWindow:e.showInfoWindow})}))}}]),t}(a.Component);n(126);var b=function(e){return console.log("Error! ".concat(e.errorMessage)),o.a.createElement("div",{className:"modal",role:"dialog"},o.a.createElement("h3",{className:"err-head"},"Error Occoured"),o.a.createElement("h5",{className:"err-meg"},e.errorMessage.message||e.errorMessage),o.a.createElement("button",{className:"err-btn",onClick:function(){return window.location.reload(!0)}},"Reload"))},v=(n(128),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).gm_authFailure=function(){n.setState(function(e){return{err:Object(l.a)(e.err).concat(["Google Map Authorization Failed"])}})},n.getGoogleMaps=function(){return n.googleMapsPromise||(n.googleMapsPromise=new Promise(function(e){window.resolveGoogleMapsPromise=function(){e(window.google),delete window.resolveGoogleMapsPromise};var t=document.createElement("script");t.src="https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyDA9RLo-1ZBGb-eQRBPWUpIB-Z97cuiZTM","&callback=resolveGoogleMapsPromise"),t.async=!0,document.body.appendChild(t)})),n.googleMapsPromise},n.selectRestaurant=function(e){n.state.selectedRestaurantID!==e&&n.setState({selectedRestaurantID:e})},n.updateQuery=function(e){n.setState(function(t){var n=t.restaurants.filter(function(t){return t.restaurant.name.toLowerCase().includes(e)});return{query:e,filteredRestaurants:n}})},n.state={restaurants:[],filteredRestaurants:[],selectedRestaurantID:null,query:"",err:[]},n.getGoogleMaps(),window.gm_authFailure=n.gm_authFailure,n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://developers.zomato.com/api/v2.1/geocode?lat=40.732013&lon=-73.996155",{headers:{"user-key":"0cdefc6dcd10b52bdd01175c3cdf4744",Accept:"application/json"}}).then(function(e){if(200!==e.status)throw e;return e.json()}).then(function(t){return e.setState({restaurants:t.nearby_restaurants,filteredRestaurants:t.nearby_restaurants})}).catch(function(t){e.setState(function(e){return{err:Object(l.a)(e.err).concat([" fetching restaurants"])}}),console.log(t)})}},{key:"render",value:function(){return o.a.createElement("main",null,!!this.state.err.length&&o.a.createElement(b,{errorMessage:this.state.err.join(", ")}),o.a.createElement(y,{places:this.state.filteredRestaurants,selectedID:this.state.selectedRestaurantID,query:this.state.query,onSelectRestaurant:this.selectRestaurant,onUpdateQuery:this.updateQuery}),o.a.createElement(w,{places:this.state.filteredRestaurants,selectedID:this.state.selectedRestaurantID,onSelectRestaurant:this.selectRestaurant,onDisplayGoogleMaps:this.getGoogleMaps}))}}]),t}(a.Component)),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(o.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/neighbourhood-maps",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/neighbourhood-maps","/service-worker.js");T?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):k(t,e)})}}()},36:function(e){e.exports=[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}]},37:function(e,t,n){e.exports=n(130)},42:function(e,t,n){},44:function(e,t,n){}},[[37,2,1]]]);
//# sourceMappingURL=main.3408649e.chunk.js.map