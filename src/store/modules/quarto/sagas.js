import { takeLatest, call, put, all } from 'redux-saga/effects';

import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../../services/api';
import { push } from 'connected-react-router';

import { getQuartoSuccess } from './actions';

export function* getQuarto({ payload }) {
  const {
    idHotel,
  } = payload;

  try {
    const response = yield call(api.get, `quarto/${idHotel}`);

    if (response) {
      const quarto = response.data;

      yield put(getQuartoSuccess(quarto));
    }
  } catch (err) {

    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha ao pegar os tipos de quarto',
    }))
  }
}

export function* newQuarto({ payload }) {
  const {
    numero, andar, tipo, id
  } = payload.quartoInfo;
  try {
    const response = yield call(api.post, 'quarto', {
      numero: parseInt(numero), andar: parseInt(andar), id_tipo_quarto: parseInt(tipo), id_hotel: id
    });

    if (response) {
      const quarto = response.data;

      if (quarto.error) {
        yield put(toastrActions.add({
          type: 'error',
          title: 'Quarto ja existe',
        }))
      } else {
        yield put(toastrActions.add({
          type: 'success',
          title: 'Quarto criado com sucesso',
        }));
        yield put(push('/hotel/'+quarto.id_hotel));
      }
    }
  } catch (err) {

    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha ao criar o quarto',
    }))
  }
}

export default all([
  takeLatest('@quarto/GET_QUARTO_REQUEST', getQuarto),
  takeLatest('@quarto/NEW_QUARTO_REQUEST', newQuarto),
]);
