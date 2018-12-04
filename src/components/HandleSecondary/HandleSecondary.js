import React, { Component } from 'react';
import styles from './HandleSecondary.module.scss';
import classNames from 'classnames/bind';
import food1 from './SecondaryImg/food1.jpg';
import food2 from './SecondaryImg/food2.jpg';
import food3 from './SecondaryImg/food3.jpg';
import food4 from './SecondaryImg/food4.jpeg';
import food5 from './SecondaryImg/food5.jpg';
import food6 from './SecondaryImg/food6.jpg';

const cx = classNames.bind(styles);

export default class HandleSecondary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyImgTextArr: [
        {
          img: food1,
          text: '곱창전골 맛집 베스트',
        },
        {
          img: food2,
          text: '이주의 EAT딜 베스트',
        },
        {
          img: food3,
          text: '성북구 양식 맛집 베스트',
        },
        {
          img: food4,
          text: '명동 맛집 베스트',
        },
        {
          img: food5,
          text: '펍 베스트',
        },
        {
          img: food6,
          text: '오믈렛 맛집 베스트',
        },
      ],
    };
  }

  render() {
    const { dummyImgTextArr } = this.state;
    return (
      <div className={cx('secondary')}>
        <h2>믿고 보는 맛집 리스트</h2>
        {dummyImgTextArr.map((dummy, index) => (
          <HandleList
            key={dummy[index]}
            listImg={dummy.img}
            listText={dummy.text}
          />
        ))}
      </div>
    );
  }
}

class HandleList extends Component {
  render() {
    const { listImg, listText } = this.props;
    return (
      <div className={cx('secondarylistList')}>
        <img src={listImg} alt="list-images" />
        <p>{listText}</p>
      </div>
    );
  }
}
