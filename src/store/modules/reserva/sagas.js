import { takeLatest, call, put, all } from 'redux-saga/effects';

import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../../services/api';
import { push } from 'connected-react-router';
import { getHotelRequest } from '../hotel/actions';

export function* newReserva({ payload }) {
  const {
    cliente, dataEntrada, dataSaida, tipo, id
  } = payload.reservaInfo;
  try {
    const response = yield call(api.post, 'reserva', {
      id_cliente: cliente, id_tipo_quarto: tipo, id_hotel: id, dataentrada: dataEntrada, datasaida: dataSaida
    });

    if (response) {
      const reserva = response.data;

      yield put(toastrActions.add({
        type: 'success',
        title: 'Reserva criada com sucesso',
      }));
      yield put(push('/hotel/'+reserva.id_hotel));
    }
  } catch (err) {

    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha ao criar a reserva',
    }))
  }
}

export function* delReserva({ payload }) {
  const {
    idReserva, idHotel,
  } = payload.reservaInfo;

  try {
    const response = yield call(api.delete, `reserva/${idReserva}`);

    if (response) {

      yield put(toastrActions.add({
        type: 'success',
        title: 'Reserva deletada com sucesso',
      }));
      yield put(getHotelRequest(idHotel));
    }
  } catch (err) {

    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha ao deletar a reserva',
    }))
  }
}

export default all([
  takeLatest('@reserva/NEW_RESERVA_REQUEST', newReserva),
  takeLatest('@reserva/DEL_RESERVA_REQUEST', delReserva),
]);
