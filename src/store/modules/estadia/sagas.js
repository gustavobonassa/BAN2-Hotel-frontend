import { takeLatest, call, put, all } from 'redux-saga/effects';

import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../../services/api';
import { push } from 'connected-react-router';
import { getHotelRequest } from '../hotel/actions';

export function* newEstadia({ payload }) {
  const {
    dataEntrada, dataSaida, quarto, id, idHotel
  } = payload.estadiaInfo;

  try {
    const response = yield call(api.post, 'estadia', {
      id_quarto: parseInt(quarto), dataentrada: dataEntrada, datasaida: dataSaida, id_reserva: parseInt(id)
    });

    if (response.data.error) {
      yield put(toastrActions.add({
        type: 'error',
        title: 'Quarto ocupado',
      }))
    } else {
      yield put(toastrActions.add({
        type: 'success',
        title: 'Estadia criada com sucesso',
      }));
      yield put(push('/hotel/'+idHotel));
    }
  } catch (err) {

    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha ao criar a estadia',
    }))
  }
}

export function* delEstadia({ payload }) {
  const {
    idEstadia, idHotel,
  } = payload.estadiaInfo;

  try {
    const response = yield call(api.delete, `estadia/${idEstadia}`);

    if (response) {

      yield put(toastrActions.add({
        type: 'success',
        title: 'Estadia finalizada',
      }));
      yield put(getHotelRequest(idHotel));
    }
  } catch (err) {

    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha ao finalizar a estadia',
    }))
  }
}

export default all([
  takeLatest('@estadia/NEW_ESTADIA_REQUEST', newEstadia),
  takeLatest('@estadia/DEL_ESTADIA_REQUEST', delEstadia),
]);
