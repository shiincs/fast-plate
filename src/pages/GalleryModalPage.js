import React, { Component } from 'react';
import GalleryModal from '../containers/GalleryModal';

export default class GalleryModalPage extends Component {
  render() {
    const { match } = this.props;

    return <GalleryModal />;
  }
}
