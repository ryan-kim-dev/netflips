import axios from 'axios';

// * axios를 인스턴스화 하여 중복되는 코드를 변수로 사용한다.
const axiosInstance = axios.create({
  // baseURL: 모든 요청의 경로에서 중복되는 부분
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'ko-KR',
  },
});

export default axiosInstance;
