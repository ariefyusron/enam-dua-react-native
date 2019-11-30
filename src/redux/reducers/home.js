import { ADD_DATA, DELETE_DATA, HANDLE_SEARCH } from '../actions';

const initialState = {
  data: [],
  search: ''
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
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
