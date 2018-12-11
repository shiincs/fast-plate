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
  render() {
    const {
      search,
      detail,
      restaurants,
      google,
      selectedPlace,
      activeMarker,
      showingInfoWindow,
      onMarkerClick,
      onMapClicked,
      onClose,
    } = this.props;
    let latSum, lngSum;

    if (search) {
      latSum = restaurants.reduce((acc, item) => {
        return acc + item.latitude;
      }, 0);
      lngSum = restaurants.reduce((acc, item) => {
        return acc + item.longitude;
      }, 0);
    }

    return (
      <section className={cx('mapSection')}>
        {search && restaurants.length > 0 ? (
          <Map
            google={google}
            zoom={15}
            style={mapStyles}
            onClick={onMapClicked}
            initialCenter={{
              lat: latSum / restaurants.length,
              lng: lngSum / restaurants.length,
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
                onClick={onMarkerClick}
              />
            ))}
            <InfoWindow
              marker={activeMarker}
              visible={showingInfoWindow}
              onClose={onClose}
            >
              <MapInfoView selectedPlace={selectedPlace} />
            </InfoWindow>
          </Map>
        ) : detail ? (
          <Map
            google={google}
            zoom={16}
            style={mapStyles}
            onClick={onMapClicked}
            initialCenter={{
              lat: restaurants.latitude,
              lng: restaurants.longitude,
            }}
          >
            <Marker
              key={restaurants.id}
              img={restaurants.imgUrl}
              name={restaurants.name}
              position={{
                lat: restaurants.latitude,
                lng: restaurants.longitude,
              }}
              onClick={onMarkerClick}
            />
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
