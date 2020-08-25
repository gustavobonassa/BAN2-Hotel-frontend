import produce from 'immer';

const INITIAL_STATE = {
  clientes: [],
};

export default function cliente(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cliente/GET_CLIENTE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@cliente/GET_CLIENTE_SUCCESS': {
        draft.clientes = action.payload.clientes;
        break;
      }
      default:
    }
  });
}
