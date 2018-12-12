import React, { Component } from 'react';
import WritingReviewView from '../components/WritingReviewView';
import api from '../api';

export default class WritingReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsPk: '',
      restaurantsName: '',
      goodOpen: false,
      okOpen: false,
      notGoodOpen: false,
      chars_left: 10000,
      reviewTextBox: '',
      cancel: false,
      selectedFile: null,
      uploadImgArr: [],

      author: {
        pk: 17,
        username: 'Jay',
        email: 'abc@1234.com',
      },
      restaurant: 1,
      content: '맛있어요~',
      rate: 0,

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

  handleCancel = () => {
    this.setState({
      cancel: true,
    });
  };

  handleWordCount(event) {
    let input = event.target.value;
    this.setState({
      chars_left: 10000 - input.length,
      reviewTextBox: event.target.value,
    });
  }

  buttonActive = () => {
    this.setState({
      buttonClick: !this.state.buttonClick,
    });
  };

  async componentDidMount() {
    document.querySelector('.pickColor1').style.color = '#CBCBCB';
    document.querySelector('.pickColor2').style.color = '#CBCBCB';
    document.querySelector('.pickColor3').style.color = '#CBCBCB';
    document.querySelector('.pickColor3').style.marginLeft = '10px';

    const { reviewId } = this.props;
    const {
      data: { name, pk },
    } = await api.get(`/api/restaurants/list/${reviewId}`);
    this.setState({
      restaurantsName: name,
      restaurantsPk: pk,
    });
  }

  async postReview() {
    const { author, restaurant, content, rate } = this.state;
    const res = await api.post(`/api/posts/list`, {
      author,
      restaurant,
      content,
      rate,
    });
    console.log(res.config);
  }

  toggleGoodOpen = () => {
    this.setState(
      {
        goodOpen: true,
        okOpen: false,
        notGoodOpen: false,
        rate: 5,
      },
      // this.setState는 비동기함수
      () => console.log(this.state.rate) // 5
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
        rate: 3,
      },
      () => console.log(this.state.rate) // 3
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
        rate: 1,
      },
      () => console.log(this.state.rate) // 1
    );
    if (!this.state.notGoodOpen) {
      document.querySelector('.pickColor3').style.color = '#ff792a';
      document.querySelector('.pickColor1').style.color = '#CBCBCB';
      document.querySelector('.pickColor2').style.color = '#CBCBCB';
    }
  };

  fileSeletedHandler = event => {
    this.setState(
      {
        selectedFile: event.target.files[0],
        uploadImgArr: this.state.uploadImgArr.concat(
          URL.createObjectURL(event.target.files[0])
        ),
      },

      () => {
        // 사진을 업로드하면 배열로 나온다. uploadImgArr 배열을 map으로 돌려서 img src에 보여주면 됨
        console.log(this.state.uploadImgArr);
      }
    );
  };

  // handleDeleteImg(index) {
  //   const { uploadImgArr } = this.state;
  //   this.setState(prevState => ({
  //     uploadImgArr: prevState.uploadImgArr.filter(list => {
  //       return uploadImgArr.indexOf(uploadImgArr[list]) !== index;
  //     }),
  //   }));
  // }

  handleDeleteImg(index) {
    const { uploadImgArr } = this.state;
    const newArr = uploadImgArr.filter((item, idx, arr) => {
      return item !== arr[index];
    });
    console.log(newArr);
    this.setState({
      uploadImgArr: newArr,
    });
  }

  // // 사진 업로드하는 메소드 (나중에 쓸 일이 있을수도 있음)
  // async fileUploadHandler() {
  //   // const { reviewId } = this.props;
  //   // await api.post(`/api/restaurants/list/${reviewId}`);
  //   console.log('upload');
  // }

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
          buttonActive={this.buttonActive}
          handleCancel={this.handleCancel}
          postReview={() => this.postReview()}
          fileSeletedHandler={this.fileSeletedHandler}
          handleDeleteImg={index => this.handleDeleteImg(index)}
        />
      </React.Fragment>
    );
  }
}
