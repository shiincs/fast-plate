import React from 'react';
import classNames from 'classnames/bind';
import styles from './RecentGoView.module.scss';
import { Link } from 'react-router-dom';
import defaultListItem from '../../commonimgs/defaultListItem.jpg';
import { withUser } from '../../contexts/UserContext';
import { withModal } from '../../contexts/ModalContext';
import LoginPopupView from '../LoginPopupView';
const cx = classNames.bind(styles);

function RecentGoView(props) {
  const {
    popupOpen,
    username,
    item,
    wannago,
    handleWannagoBtn,
    showTargetElement,
    hideTargetElement,
  } = props;
  return (
    <li key={item.pk} className={cx('RecentGo')}>
      <figure className={cx('RecentGoItem')}>
        <Link
          to={`/restaurant/${item.pk}`}
          onClick={() => {
            hideTargetElement('modalOpen');
          }}
        >
          <img
            // src={item.menuimage_res[0]}
            src={item.imgUrl ? item.imgUrl : defaultListItem}
            alt={item.name}
            className={cx('thumb')}
          />
        </Link>
        <figcaption className={cx('info')}>
          <Link
            to={`/restaurant/${item.pk}`}
            onClick={() => {
              hideTargetElement('modalOpen');
            }}
          >
            <h3 className={cx('name')}>{item.name}</h3>
          </Link>
          <span className={cx('score')}>
            {parseFloat(item.rate_average).toFixed(1)}
          </span>
          <p className={cx('etcInfo')}>
            <span className={cx('location')}>{item.address.slice(0, 8)} -</span>
            <span className={cx('type')}> {item.food_type}</span>
          </p>
        </figcaption>
        <div
          className={cx('wannagoBtn', { active: wannago })}
          onClick={() => {
            username ? handleWannagoBtn() : showTargetElement('popupOpen');
          }}
        >
          가고싶다
        </div>
      </figure>
      {popupOpen ? <LoginPopupView /> : null}
    </li>
  );
}

export default withUser(withModal(RecentGoView));
