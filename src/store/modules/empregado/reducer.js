import produce from 'immer';

const INITIAL_STATE = {
  empregados: [],
};

export default function empregado(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@empregado/GET_EMPREGADO_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@empregado/GET_EMPREGADO_SUCCESS': {
        draft.empregados = action.payload.empregados;
        break;
      }
      default:
    }
  });
}
