import {
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_ERROR,
  ADD_PHONE_SUCCESS,
  ADD_PHONE_ERROR,
  EDIT_PHONE_SUCCESS,
  EDIT_PHONE_ERROR,
  DELETE_PHONE_SUCCESS,
  DELETE_PHONE_ERROR,
} from '../types';

export const fetchPhones = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firestore
    .collection('phones')
    .get()
    .then((res) => {
      dispatch({
        type: FETCH_PHONES_SUCCESS,
        payload: res.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_PHONES_ERROR,
        payload: err,
      });
    });
};

export const addPhone = (phone) => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const firebase = getFirebase();
  await firebase.uploadFile('images/', phone.phoneImage);
  const downloadURL = await firebase
    .storage()
    .ref('images/')
    .child(phone.phoneImage.name)
    .getDownloadURL();
  const firestore = getFirestore();
  await firestore
    .collection('phones')
    .add({ ...phone, phoneImage: downloadURL })
    .then((res) => {
      dispatch({
        type: ADD_PHONE_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_PHONE_ERROR,
        payload: err,
      });
    });
};

export const deletePhone = (phoneId) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  await firestore
    .collection('phones')
    .doc(phoneId)
    .delete()
    .then((res) => {
      dispatch({
        type: DELETE_PHONE_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_PHONE_ERROR,
        payload: err,
      });
    });
};

export const editPhone = (phone) => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  let options = {};
  if (typeof phone.phoneImage === 'string') {
    options = { ...phone };
  } else {
    const firebase = getFirebase();
    await firebase.uploadFile('images/', phone.phoneImage);
    const downloadURL = await firebase
      .storage()
      .ref('images/')
      .child(phone.phoneImage.name)
      .getDownloadURL();

    options = { ...phone, phoneImage: downloadURL };
  }

  const firestore = getFirestore();
  await firestore
    .collection('phones')
    .doc(phone.id)
    .set(options)
    .then((res) => {
      dispatch({
        type: EDIT_PHONE_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_PHONE_ERROR,
        payload: err,
      });
    });
};
