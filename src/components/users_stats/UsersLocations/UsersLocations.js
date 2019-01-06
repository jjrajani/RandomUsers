import React, { Component } from "react";
import "./UsersLocations.scss";
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");
const {
  MarkerClusterer
} = require("react-google-maps/lib/components/addons/MarkerClusterer");

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyASfoADlEq3KS_EdhjcOgCnN4WuEhvrE0c&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `37vh` }} />,
    mapElement: (
      <div style={{ height: `100%`, width: "90vw", margin: "0 auto" }} />
    )
  }),
  withHandlers({
    onMarkerClustererClick: () => markerClusterer => {
      const clickedMarkers = markerClusterer.getMarkers();
      console.log(`Current clicked markers length: ${clickedMarkers.length}`);
      console.log(clickedMarkers);
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={2} defaultCenter={{ lat: 39.562893, lng: 0 }}>
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={90}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker.id}
          position={{ lat: marker.lat, lng: marker.lng }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
));

export default class UsersLocations extends Component {
  state = {
    markers: []
  };

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      let markers = [];

      if (this.props.data) {
        markers = this.props.data.reduce((accum, d, i) => {
          return [
            ...accum,
            {
              id: i,
              lat: parseFloat(d.location.coordinates.latitude, 10),
              lng: parseFloat(d.location.coordinates.longitude, 10)
            }
          ];
        }, []);
      }

      this.setState({ markers });
    }
  }

  render() {
    return (
      <div className="users-locations">
        <h3>User Locations</h3>
        <MapWithAMarkerClusterer markers={this.state.markers} />
      </div>
    );
  }
}
