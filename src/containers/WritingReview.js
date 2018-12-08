import React, { Component } from 'react';
import WritingReviewView from '../components/WritingReviewView';
export default class WritingReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodOpen: false,
      okOpen: false,
      notGoodOpen: false,
      imagePath: [
        'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_recommend_face.svg',

        'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_recommend_active_face.svg',

        'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_ok_face.svg',

        'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_ok_active_face.svg',

        'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_not_recommend_face.svg',

        'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/restaurant_not_recommend_active_face.svg',
      ],
    };
  }

  allFontBlack = () => {
    document.querySelector('.pickColor1').style.color = '#181818';
    document.querySelector('.pickColor2').style.color = '#181818';
    document.querySelector('.pickColor3').style.color = '#181818';
  };

  toggleGoodOpen = () => {
    this.setState(prevState => ({
      goodOpen: !prevState.goodOpen,
      okOpen: false,
      notGoodOpen: false,
    }));
    if (this.state.goodOpen) {
      this.allFontBlack();
    } else {
      document.querySelector('.pickColor1').style.color = '#ff792a';
      document.querySelector('.pickColor2').style.color = '#181818';
      document.querySelector('.pickColor3').style.color = '#181818';
    }
  };

  toggleOkOpen = () => {
    this.setState(prevState => ({
      okOpen: !prevState.okOpen,
      goodOpen: false,
      notGoodOpen: false,
    }));

    if (this.state.okOpen) {
      this.allFontBlack();
    } else {
      document.querySelector('.pickColor2').style.color = '#ff792a';
      document.querySelector('.pickColor1').style.color = '#181818';
      document.querySelector('.pickColor3').style.color = '#181818';
    }
  };

  toggleNotGoodOpen = () => {
    this.setState(prevState => ({
      notGoodOpen: !prevState.notGoodOpen,
      okOpen: false,
      goodOpen: false,
    }));
    if (this.state.notGoodOpen) {
      this.allFontBlack();
    } else {
      document.querySelector('.pickColor3').style.color = '#ff792a';
      document.querySelector('.pickColor1').style.color = '#181818';
      document.querySelector('.pickColor2').style.color = '#181818';
    }
  };

  render() {
    return (
      <React.Fragment>
        <WritingReviewView
          {...this.state}
          toggleGoodOpen={this.toggleGoodOpen}
          toggleOkOpen={this.toggleOkOpen}
          toggleNotGoodOpen={this.toggleNotGoodOpen}
        />
      </React.Fragment>
    );
  }
}
