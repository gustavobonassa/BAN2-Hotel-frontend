import { takeLatest, call, put, all } from 'redux-saga/effects';

import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../../services/api';
import { push } from 'connected-react-router';

import { getTipoQuartoSuccess } from './actions';

export function* getTipoQuarto({ payload }) {
  const {
    idHotel,
  } = payload;

  try {
    const response = yield call(api.get, `tipoquarto/${idHotel}`);

    if (response) {
      const tipoquarto = response.data;
      console.log(response, idHotel)
      if (!tipoquarto.error) {
        yield put(getTipoQuartoSuccess(tipoquarto));
      }
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
    preco, camaExtra, id, tipo,
  } = payload.tipoQuartoInfo;
  try {
    const response = yield call(api.post, 'tipoquarto', {
      tipo, id_hotel: id, preco, cama_extra: camaExtra,
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
