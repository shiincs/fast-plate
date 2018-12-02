import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './MapView.module.scss';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import MapInfoView from '../MapInfoView/MapInfoView';
const cx = classNames.bind(styles);
const mapStyles = {
  width: '100%',
  height: '450px',
};

export class MapView extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <section className={cx('mapSection')}>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          onClick={this.onMapClicked}
          initialCenter={{
            lat: 37.5497824,
            lng: 127.0445833,
          }}
        >
          <Marker
            img={
              'https://mp-seoul-image-production-s3.mangoplate.com/882510_1516984909816099.jpg?fit=around|359:240&crop=359:240;*,*&output-format=jpg&output-quality=80'
            }
            name={'팩피'}
            score={4.7}
            location={'왕십리/성동'}
            type={'기타 양식'}
            reviewCount={26}
            wannagoCount={10}
            position={{ lat: 37.5497824, lng: 127.0445833 }}
            onClick={this.onMarkerClick}
          />
          <Marker
            name={'와하카'}
            position={{ lat: 37.54785459, lng: 127.05436622 }}
            onClick={this.onMarkerClick}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <MapInfoView selectedPlace={this.state.selectedPlace} />
          </InfoWindow>
        </Map>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBEnQjegs7YdsLdGxRBMSHoQ1aFlJKppwM',
})(MapView);
