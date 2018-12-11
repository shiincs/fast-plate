// import React, { Component } from 'react';
// import api from '../api';
// import ReviewListView from '../components/ReviewListView';
// export default class ReviewList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       postset: [],
//     };
//   }

//   render() {
//     const { postset } = this.props;
//     const reviewList = postset.map(r => ({
//       content: r.content,
//       username: r.author.username,
//       rate: r.rate,
//     }));

//     return (
//       <React.Fragment>
//         <ReviewListView reviewList={reviewList} />
//       </React.Fragment>
//     );
//   }
// }
