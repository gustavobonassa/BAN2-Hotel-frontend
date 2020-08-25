import { takeLatest, call, put, all } from 'redux-saga/effects';

import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../../services/api';
import { push } from 'connected-react-router';

import { getTipoQuartoSuccess } from './actions';

export function* getTipoQuarto({ payload }) {
  const {
    idHotel,
  } = payload;
  console.log(idHotel)
  try {
    const response = yield call(api.get, `tipoquarto/${idHotel}`);

    if (response) {
      const tipoquarto = response.data;

      yield put(getTipoQuartoSuccess(tipoquarto));
    }
  } catch (err) {

    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha ao pegar os tipos de quarto',
    }))
  }
}

export function* newTipoQuarto({ payload }) {
  const {
    numero, andar, tipo, id
  } = payload.tipoQuartoInfo;
  try {
    const response = yield call(api.post, 'tipoquarto', {
      numero, andar, id_tipo_quarto: tipo, id_hotel: id
    });

    if (response) {
      const quarto = response.data;

      yield put(toastrActions.add({
        type: 'success',
        title: 'Tipo do quarto criado com sucesso',
      }));
      yield put(push('/hotel/'+quarto.id_hotel));
    }
  } catch (err) {

    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha ao criar o tipo do quarto',
    }))
  }
}

export default all([
  takeLatest('@tipoQuarto/GET_TIPO_QUARTO_REQUEST', getTipoQuarto),
  takeLatest('@tipoQuarto/NEW_TIPO_QUARTO_REQUEST', newTipoQuarto),
]);
