import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// import classNames from 'classnames/bind';
// import styles from './CarouselView.module.scss';
import './CarouselView.scss';

// const cx = classNames.bind(styles);

// 필요한 내용 : 유저명, 날짜, 평가얼굴아이콘
export default function CarouselView(props) {
  const { post_set, restaurants, imagePath } = props;
  console.log(post_set[1].postimage_posts[0].image);
  console.log(post_set[1].content);

  return (
    <React.Fragment>
      <Carousel
        className="carouselWindow"
        showStatus={false}
        showIndicators={false}
      >
        {post_set.map(item => (
          <div key={item.pk} className="imgWrapper">
            <img
              src={item.postimage_posts.map(element => element.image)}
              alt="userPostedimages"
              className="carouselImages"
            />
            <h1>{restaurants.name}</h1>
            <h3>{item.author.username}</h3>
            <img
              src={item.author.img_profile}
              alt="profileImage"
              className="profilePic"
            />
            <img
              src={
                item.rate === 5
                  ? imagePath[0]
                  : item.rate === 3
                  ? imagePath[1]
                  : item.rate === 1
                  ? imagePath[2]
                  : null
              }
              alt="eval-face-icon"
              className={'evalFace'}
            />
            <p className={'evalText'}>
              {item.rate === 5
                ? '맛있다'
                : item.rate === 3
                ? '괜찮다'
                : item.rate === 1
                ? '별로'
                : null}
            </p>
            <p className="carouselContent">{item.content}</p>
          </div>
        ))}
      </Carousel>
    </React.Fragment>
  );
}
