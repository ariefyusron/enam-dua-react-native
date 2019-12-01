import { api } from '../../configs';

export const GET_DETAIL_PENDING = 'GET_DETAIL_PENDING';
export const GET_DETAIL_SUCCESS = 'GET_DETAIL_SUCCESS';
export const GET_DETAIL_ERROR = 'GET_DETAIL_ERROR';

export const getDetail = id => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_DETAIL_PENDING });

    const { auth } = getState();
    const response = await api.getDetail(id, {
      authorization: auth.token
    });

    dispatch({ type: GET_DETAIL_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: GET_DETAIL_ERROR, payload: error });
  }
};
