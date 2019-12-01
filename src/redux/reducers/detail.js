import {
  GET_DETAIL_PENDING,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_ERROR
} from '../actions';

const initialState = {
  data: {
    photos: []
  },
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_PENDING:
      return { ...state, isLoading: true };
    case GET_DETAIL_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case GET_DETAIL_ERROR:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
