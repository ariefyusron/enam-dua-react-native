import { api } from '../../configs';

export const ADD_DATA = 'ADD_DATA';
export const DELETE_DATA = 'DELETE_DATA';

export const HANDLE_SEARCH = 'HANDLE_SEARCH';
export const GET_DATA_PENDING = 'GET_DATA_PENDING';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';

export const addData = data => dispatch => {
  dispatch({ type: ADD_DATA, payload: data });
};

export const deleteData = data => dispatch => {
  dispatch({ type: DELETE_DATA, payload: data });
};

export const handleSearch = keyword => async dispatch => {
  dispatch({
    type: HANDLE_SEARCH,
    payload: keyword
  });
  clearTimeout(this.search);
  this.search = setTimeout(() => {
    dispatch(getData());
  }, 500);
};

export const getData = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_DATA_PENDING });

    const { auth, home } = getState();
    const response = await api.searchData(
      home.search === '' ? 'new%20york' : home.search,
      {
        authorization: auth.token
      }
    );

    dispatch({ type: GET_DATA_SUCCESS, payload: response.businesses });
  } catch (error) {
    dispatch({ type: GET_DATA_ERROR, payload: error });
  }
};
