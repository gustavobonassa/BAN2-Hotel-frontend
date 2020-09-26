import { takeLatest, call, put, all } from 'redux-saga/effects';

import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../../services/api';
import { push } from 'connected-react-router';

import { getEmpregadosSuccess } from './actions';

export function* getEmpregado({ payload }) {
  try {
    const response = yield call(api.get, 'empregado');

    if (response) {
      const empregados = response.data;
      console.log(empregados)
      yield put(getEmpregadosSuccess(empregados));
    }
  } catch (err) {
    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha ao pegar lista de empregados',
    }))
  }
}

export function* newEmpregado({ payload }) {
  const {
    nome, rg, login, senha, id_hotel,
  } = payload.empregadoInfo;
  try {
    const response = yield call(api.post, 'empregado', {
      nome, rg, login, senha, id_hotel: parseInt(id_hotel),
    });

    const empregado = response.data;
    if (empregado.error) {
      yield put(toastrActions.add({
        type: 'error',
        title: empregado.error,
      }));
    } else {
      yield put(toastrActions.add({
        type: 'success',
        title: 'Empregado criado com sucesso',
      }));
      yield put(push('/empregados'));
    }
  } catch (err) {
    console.log(err.response)
    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha ao criar o empregado',
    }))
  }
}

export default all([
  takeLatest('@empregado/GET_EMPREGADO_REQUEST', getEmpregado),
  takeLatest('@empregado/NEW_EMPREGADO_REQUEST', newEmpregado),
]);
