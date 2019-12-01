import {
  ADD_DATA,
  DELETE_DATA,
  HANDLE_SEARCH,
  GET_DATA_PENDING,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR
} from '../actions';

const initialState = {
  data: [],
  search: '',
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, data: [action.payload, ...state.data] };
    case DELETE_DATA:
      return {
        ...state,
        data: state.data.filter(data => data !== action.payload)
      };
    case HANDLE_SEARCH:
      return { ...state, search: action.payload, isLoading: true };
    case GET_DATA_PENDING:
      return { ...state, isLoading: true };
    case GET_DATA_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case GET_DATA_ERROR:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
