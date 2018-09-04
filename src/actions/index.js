import axios from 'axios';

const API_URL = 'http://localhost:3003/api/todos';

const setItems = items => ({
  type: 'SET_ITEMS',
  items,
});

export const update = item => (dispatch) => {
  axios.put(`${API_URL}/${item._id}`, item)
    .then(() => dispatch(fetch()))
};

export const add = item => (dispatch) => {
  axios.post(API_URL, item)
    .then(() => dispatch(fetch()))
};

export const fetch = () => {
  return (dispatch) => {
    axios.get(API_URL)
      .then((res) => dispatch(setItems(res.data)));
  };
};
