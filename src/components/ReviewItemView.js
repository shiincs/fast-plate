import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './ReviewItemView.module.scss';

const cx = classNames.bind(styles);

export default class ReviewItemView extends Component {
  // class defaultprops = {
  //   pk:null,
  //   author:'',
  //   restaurant:'',
  //   rate:'',
  //   content:'',
  //   postimage_posts:[]
  // }
  render() {
    return (
      <div className={cx('reveiw-content')}>
        <figure>
          <div className={cx('user-thumb')}>
            <img src="" alt="" />
          </div>
          <figcaption>노맛집연구소</figcaption>
        </figure>
        <div className={cx('review-wrapper')}>
          <span className={cx('date')}>2018-10-20</span>
          <div className={cx('review')}>
            인생라떼 갱신!!!
            <br />
            처음 온 것 같다면서 블랙커피를 좋아하는지, 우유가 들어간
            화이트커피를 좋아하는지 물으시더니 제가 좋아하는 라떼에 어울리는
            듁스 에스프레소 원두를 골라주셨어요.
            <br />
            아침 일찍 갔는데 저보다 일찍 온 단골 손님들이 제법 계셨어요. 단골
            손님들과 다양한 주제로 즐거운 대화를 나누는 모습에 여긴 커피만 파는
            곳이 아니라는 걸 느꼈어요.
            <br />
            정말 친절하시고 커피도 맛있어서 다음에 또 가고 싶어요!
            <br />
          </div>
          <div className={cx('list-thumb-photos')}>
            <button className={cx('button-thumb')} />
            <button className={cx('button-thumb')} />
            <button className={cx('button-thumb')} />
          </div>
        </div>
        <div className={cx('icon-rating')}>
          <strong className={cx('icon-img')}>맛있다</strong>
        </div>
      </div>
    );
  }
}
