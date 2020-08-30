import { takeLatest, call, put, all } from 'redux-saga/effects';

import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../../services/api';
import { push } from 'connected-react-router';

import { getClientesSuccess } from './actions';

export function* getClientes({ payload }) {
  try {
    const response = yield call(api.get, 'cliente');

    if (response) {
      const clientes = response.data;

      yield put(getClientesSuccess(clientes));
    }
  } catch (err) {

    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha ao pegar lista de clientes',
    }))
  }
}

export function* newCliente({ payload }) {
  const {
    rua, bairro, cidade, estado, numero, nome, telefone, rg,
  } = payload.clienteInfo;
  try {
    const response = yield call(api.post, 'cliente', {
      rua, bairro, cidade, estado, numero, nome, telefone, rg,
    });

    const cliente = response.data;
    if (cliente.error) {
      yield put(toastrActions.add({
        type: 'error',
        title: cliente.error,
      }));
    } else {
      yield put(toastrActions.add({
        type: 'success',
        title: 'Cliente criado com sucesso',
      }));
      yield put(push('/clientes'));
    }
  } catch (err) {

    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha ao criar o cliente',
    }))
  }
}

export default all([
  takeLatest('@cliente/GET_CLIENTE_REQUEST', getClientes),
  takeLatest('@cliente/NEW_CLIENTE_REQUEST', newCliente),
]);
