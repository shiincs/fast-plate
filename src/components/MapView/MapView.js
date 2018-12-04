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

class MapView extends Component {
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
    const { restaurants } = this.props;
    return (
      <section className={cx('mapSection')}>
        {restaurants.length > 0 ? (
          <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            onClick={this.onMapClicked}
            initialCenter={{
              lat: restaurants[0].latitude,
              lng: restaurants[0].longitude,
            }}
          >
            {restaurants.map(r => (
              <Marker
                key={r.id}
                img={r.imgUrl}
                name={r.name}
                score={r.score}
                location={r.location}
                type={r.foodType}
                reviewCount={r.reviewCount}
                wannagoCount={r.wannagoCount}
                position={{ lat: r.latitude, lng: r.longitude }}
                onClick={this.onMarkerClick}
              />
            ))}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <MapInfoView selectedPlace={this.state.selectedPlace} />
            </InfoWindow>
          </Map>
        ) : (
          <div>검색 결과가 없습니다.</div>
        )}
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBEnQjegs7YdsLdGxRBMSHoQ1aFlJKppwM',
})(MapView);
