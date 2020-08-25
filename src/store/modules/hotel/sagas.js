import { takeLatest, call, put, all } from 'redux-saga/effects';

import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../../services/api';
import { push } from 'connected-react-router';

import { getHotelsSuccess, getHotelSuccess } from './actions';

export function* getHotel({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(api.get, `hotel/${id}`);

    if (response) {
      const hotel = response.data;

      yield put(getHotelSuccess(hotel));
    }
  } catch (err) {

    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha ao pegar o hotel',
    }))
  }
}

export function* getHotels({ payload }) {
  try {
    const response = yield call(api.get, 'hotel');

    if (response) {
      const hotels = response.data;

      yield put(getHotelsSuccess(hotels));
    }
  } catch (err) {

    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha ao pegar lista de hoteis',
    }))
  }
}

export function* newHotel({ payload }) {
  const {
    rua, bairro, cidade, estado, numero, nome, telefone,
  } = payload.hotelInfo;
  try {
    const response = yield call(api.post, 'hotel', {
      rua, bairro, cidade, estado, numero, nome, telefone,
    });

    if (response) {
      // const hotel = response.data;

      yield put(toastrActions.add({
        type: 'success',
        title: 'Hotel criado com sucesso',
      }));
      yield put(push('/hotel'));
    }
  } catch (err) {

    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha ao criar o hotel',
    }))
  }
}

export default all([
  takeLatest('@hotel/GET_SINGLE_HOTEL_REQUEST', getHotel),
  takeLatest('@hotel/GET_HOTEL_REQUEST', getHotels),
  takeLatest('@hotel/NEW_HOTEL_REQUEST', newHotel),
]);
