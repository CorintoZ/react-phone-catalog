import {
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_ERROR,
  ADD_PHONE_SUCCESS,
  EDIT_PHONE_ERROR,
  EDIT_PHONE_SUCCESS,
  ADD_PHONE_ERROR,
  DELETE_PHONE_SUCCESS,
  DELETE_PHONE_ERROR,
} from '../types';

export const phoneReducers = (state = { phones: [] }, action) => {
  switch (action.type) {
    case FETCH_PHONES_SUCCESS:
      return { ...state, phones: action.payload };
    case FETCH_PHONES_ERROR:
      console.log('fetch phones error', action.err);
      break;
    case DELETE_PHONE_SUCCESS:
      return { ...state };
    case DELETE_PHONE_ERROR:
      console.log('delete phone error', action.err);
      break;
    case ADD_PHONE_SUCCESS:
      return state;
    case ADD_PHONE_ERROR:
      console.log('add phone error', action.err);
      break;
    case EDIT_PHONE_SUCCESS:
      return state;
    case EDIT_PHONE_ERROR:
      console.log('edit phone error', action.err);
      break;
    default:
      return state;
  }
};
