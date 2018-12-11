import React, { Component } from 'react';
import WritingReviewView from '../components/WritingReviewView';

export default class WritingReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodOpen: false,
      okOpen: false,
      notGoodOpen: false,
      reviewScore: 0,
      chars_left: 10000,
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

  handleWordCount(event) {
    var input = event.target.value;
    this.setState({
      chars_left: 10000 - input.length,
    });
  }

  componentDidMount() {
    document.querySelector('.pickColor1').style.color = '#CBCBCB';
    document.querySelector('.pickColor2').style.color = '#CBCBCB';
    document.querySelector('.pickColor3').style.color = '#CBCBCB';
    document.querySelector('.pickColor3').style.marginLeft = '10px';
  }

  toggleGoodOpen = () => {
    this.setState(
      {
        goodOpen: true,
        okOpen: false,
        notGoodOpen: false,
        reviewScore: 5,
      },
      // this.setState는 비동기함수
      () => console.log(this.state.reviewScore) // 5
    );
    if (!this.state.goodOpen) {
      document.querySelector('.pickColor1').style.color = '#ff792a';
      document.querySelector('.pickColor2').style.color = '#CBCBCB';
      document.querySelector('.pickColor3').style.color = '#CBCBCB';
    }
  };

  toggleOkOpen = () => {
    this.setState(
      {
        okOpen: true,
        goodOpen: false,
        notGoodOpen: false,
        reviewScore: 3,
      },
      () => console.log(this.state.reviewScore) // 3
    );
    if (!this.state.okOpen) {
      document.querySelector('.pickColor2').style.color = '#ff792a';
      document.querySelector('.pickColor1').style.color = '#CBCBCB';
      document.querySelector('.pickColor3').style.color = '#CBCBCB';
    }
  };

  toggleNotGoodOpen = () => {
    this.setState(
      {
        notGoodOpen: true,
        okOpen: false,
        goodOpen: false,
        reviewScore: 1,
      },
      () => console.log(this.state.reviewScore) // 1
    );
    if (!this.state.notGoodOpen) {
      document.querySelector('.pickColor3').style.color = '#ff792a';
      document.querySelector('.pickColor1').style.color = '#CBCBCB';
      document.querySelector('.pickColor2').style.color = '#CBCBCB';
    }
  };

  render() {
    const { restaurants } = this.props;
    return (
      <React.Fragment>
        <WritingReviewView
          {...this.state}
          toggleGoodOpen={this.toggleGoodOpen}
          toggleOkOpen={this.toggleOkOpen}
          toggleNotGoodOpen={this.toggleNotGoodOpen}
          handleWordCount={e => this.handleWordCount(e)}
          restaurants={restaurants}
        />
      </React.Fragment>
    );
  }
}
