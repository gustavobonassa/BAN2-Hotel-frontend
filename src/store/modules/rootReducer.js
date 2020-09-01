import { combineReducers } from 'redux';

import auth from './auth/reducer';
import hotel from './hotel/reducer';
import cliente from './cliente/reducer';
import tipoQuarto from './tipoQuarto/reducer';
import quarto from './quarto/reducer';
import reserva from './reserva/reducer';
import estadia from './estadia/reducer';
import empregado from './empregado/reducer';
import { reducer as toastr } from 'react-redux-toastr';
import { connectRouter } from 'connected-react-router';

export default history => combineReducers({
  auth,
  hotel,
  cliente,
  toastr,
  tipoQuarto,
  quarto,
  reserva,
  estadia,
  empregado,
  router: connectRouter(history)
});
