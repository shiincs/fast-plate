import React, { Component } from 'react';
import WritingReviewView from '../components/WritingReviewView';
import { Redirect } from 'react-router-dom';
import api from '../api';

export default class WritingReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewSend: false,
      restaurantsPk: '',
      restaurantsName: '',
      goodOpen: false,
      okOpen: false,
      notGoodOpen: false,
      chars_left: 10000,
      reviewTextBox: '',
      cancel: false,
      complete: false,
      selectedFile: null,
      rate: 0,
      uploadImgArr: [],

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

  handleCancel() {
    this.setState({
      cancel: true,
    });
  }

  handleWordCount(e) {
    let input = e.target.value;
    this.setState({
      chars_left: 10000 - input.length,
      reviewTextBox: e.target.value,
    });
    console.log(this.state.reviewTextBox);
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
  handleFileChange(e) {
    e.persist();
    // console.log(e.target.files);
    if (e.target.files) {
      this.setState(prevState => ({
        uploadImgArr: [...prevState.uploadImgArr, ...e.target.files],
      }));
    }
  }
  async postReview() {
    const {
      restaurantsPk,
      goodOpen,
      okOpen,
      notGoodOpen,
      reviewTextBox,
      uploadImgArr,
      rate,
      // uploadImgArr,
    } = this.state;
    console.log(restaurantsPk, rate, reviewTextBox);
    // const { reviewId } = this.props;

    if (!goodOpen && !okOpen && !notGoodOpen) {
      alert('평가해 주세요');
    } else {
      try {
        const {
          data: { pk: cpk },
        } = await api.post(`/api/posts/list/`, {
          restaurant: restaurantsPk,
          content: reviewTextBox,
          rate,
        });

        const formData = new FormData();
        // console.log(uploadImgArr[0])
        // formData.append('image', uploadImgArr[0]);

        formData.append('post', cpk);

        for (const image of uploadImgArr) {
          formData.append(`image`, image);
          await api.post('/api/posts/image/', formData, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          });
        }
      } catch (e) {
        console.log(e);
      }

      this.setState(prev => ({
        reviewSend: !prev.reviewSend,
      }));
    }
  }

  async handleSubmit() {
    // const { restaurantsPk, rate, reviewTextBox, uploadImgArr } = this.state;
    // try {
    // const res = await api.post('/api/posts/list/', {
    //   restaurant: restaurantsPk,
    //   content: reviewTextBox,
    //   rate,
    // });
    //   console.log(res);
    // } catch (e) {
    //   console.log(e);
    // }
    // FormData는 key-value 저장소로서,
    // POST 요청에 담아 보낼 수 있습니다.
    // 가장 큰 특징은 **파일을 담을 수 있다**는 것입니다.
    // const formData = new FormData();
    // formData.append('reviewTextBox', reviewTextBox);
    // uploadImgArr.forErach((f, index) => {
    //   formData.append(`file${index}`, f);
    // });
    // const res = await api.post('/api/posts/image/', FormData);
    // // 콘솔에서 출력된 결과를 확인해보세요.
    // console.log(res.data);
    // const form = new FormData();
    // form.append('image', 이미지 파일);
    // form.append('pk', 댓글PK);
    // try {
    //   api.post('/api/posts/image/', form, {
    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   });
    // } catch (e) {
    //   console.log(e);
    // }
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
  // async fileUploadHandler(reviewId) {
  //   // const {reviewId} = this.props;
  //   await api.post(`/api/restaurants/list/${reviewId}`{});
  // }

  render() {
    const { restaurants, reviewId } = this.props;
    const { reviewSend, restaurantsPk } = this.state;

    if (reviewSend) {
      return <Redirect to={`/restaurant/${reviewId}`} />;
    }

    return (
      <React.Fragment>
        <WritingReviewView
          {...this.state}
          restaurantsPk={restaurantsPk}
          toggleGoodOpen={this.toggleGoodOpen}
          toggleOkOpen={this.toggleOkOpen}
          toggleNotGoodOpen={this.toggleNotGoodOpen}
          handleWordCount={e => this.handleWordCount(e)}
          restaurants={restaurants}
          buttonActive={this.buttonActive}
          handleCancel={() => this.handleCancel()}
          postReview={() => this.postReview()}
          fileSeletedHandler={this.fileSeletedHandler}
          handleDeleteImg={index => this.handleDeleteImg(index)}
          fileUploadHandler={() => this.fileUploadHandler()}
          handleFileChange={e => this.handleFileChange(e)}
          handleSubmit={() => this.handleSubmit()}
        />
      </React.Fragment>
    );
  }
}
