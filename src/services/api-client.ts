import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '61d4f96f759841e09b4019b2aef60e9f',
  },
});
