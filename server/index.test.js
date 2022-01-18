const axios = require('axios');
const { REACT_APP_TOKEN } = process.env;

test('GET request at /reviews/40355 should return with correct rating', () => axios.get('http://127.0.0.1:3000/reviews/40355', { headers: { Authorization: REACT_APP_TOKEN } })
  .then((res) => expect(Number(res.data.toFixed(2))).toEqual(2.39))
  .catch(err => console.log(err)));
