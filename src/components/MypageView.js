import React, { Component } from 'react';
import styles from './MypageView.module.scss';
import classNames from 'classnames/bind';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';

const cx = classNames.bind(styles);

export default class MypageView extends Component {
  componentWillUnmount() {
    // 5. Useful if we have called disableBodyScroll for multiple target elements,
    // and we just want a kill-switch to undo all that.
    // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor
    // clicks a link which takes him/her to a different page within the app.
    clearAllBodyScrollLocks();
  }

  render() {
    const { modalOpen, hideTargetElement } = this.props;

    return (
      <React.Fragment>
        <div
          className={cx({ blackOverlay: modalOpen })}
          onClick={hideTargetElement}
        />
        <section className={cx('myPage', 'arrowTop', { modal: !modalOpen })}>
          <div className={cx('tapWrapper')}>
            <button className={cx('tap')}>최근 본 맛집 (0)</button>
            <button className={cx('tap')}>가고싶다</button>
          </div>
          <div className={cx('list')}>
            <ul className={cx('recentView')}>
              <li>1</li>
            </ul>
            <ul className={cx('wannago')}>
              <li>1</li>
            </ul>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
