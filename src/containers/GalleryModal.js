import React, { Component } from 'react';
import GalleryModalView from '../components/GalleryModalView/GalleryModalView';

export default class GalleryModal extends Component {
  render() {
    return <GalleryModalView restaurants={this.props.restaurants} />;
  }
}
