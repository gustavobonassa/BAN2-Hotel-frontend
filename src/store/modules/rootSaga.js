import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import hotel from './hotel/sagas';
import cliente from './cliente/sagas';
import tipoQuarto from './tipoQuarto/sagas';
import quarto from './quarto/sagas';
import reserva from './reserva/sagas';
import estadia from './estadia/sagas';
import empregado from './empregado/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    hotel,
    cliente,
    tipoQuarto,
    quarto,
    reserva,
    estadia,
    empregado,
  ]);
}
