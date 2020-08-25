import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import hotel from './hotel/sagas';
import cliente from './cliente/sagas';
import tipoQuarto from './tipoQuarto/sagas';
import quarto from './quarto/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    hotel,
    cliente,
    tipoQuarto,
    quarto,
  ]);
}
