// import React, { Component } from 'react';
// import api from '../api';
// import RateListView from '../component//MainListView/RateListView';
// export default class MainList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       restaurantList: [
//         {
//           //   id: 1,
//           //   name: '파씨오네',
//           //   rate_average: 4.2,
//           //   food_type: '탕 / 찌개 / 전골',
//           //   mainImg: food1,
//           //   text: '곱창전골 맛집 베스트',
//         },
//       ],
//     };
//   }
//   async componentDidMount() {
//     //https://fastplate.xyz/api/restaurants/list/?page=1&ordering=-rate_average&page_size=8
//     const data = await api.get('/api/restaurants/list/', {
//       params: {
//         page: 1,
//         ordering: '-rate_average',
//         page_size: 8,
//       },
//     });
//     this.setState({
//       restaurantList: [...data],
//     });
//     console.log(data);
//   }

//   render() {
//     return (
//       <>
//         <RateListView />
//       </>
//     );
//   }
// }
