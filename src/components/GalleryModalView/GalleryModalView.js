import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './GalleryModalView.module.scss';
import { withModal } from '../../contexts/ModalContext';
import CarouselView from '../CarouselView/CarouselView';

const cx = classNames.bind(styles);

class GalleryModalView extends Component {
  render() {
    const { galleryOpen, hideTargetElement, restaurants } = this.props;
    console.log(restaurants);
    return (
      <React.Fragment>
        <div
          className={cx({ blackOverlay: galleryOpen })}
          onClick={() => {
            hideTargetElement('galleryOpen');
          }}
        />
        <section className={cx('galleryModal')}>
          <div className={cx('carouselWrapper')}>
            <CarouselView />
          </div>
          <div className={cx('reviewWrapper')}>댓글내용</div>
        </section>
        <button
          className={cx('closeBtn')}
          onClick={() => {
            hideTargetElement('galleryOpen');
          }}
        >
          닫기
        </button>
      </React.Fragment>
    );
  }
}

export default withModal(GalleryModalView);
