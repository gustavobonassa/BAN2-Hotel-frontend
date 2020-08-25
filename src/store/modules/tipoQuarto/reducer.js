import produce from 'immer';

const INITIAL_STATE = {
  tipoQuarto: [],
};

export default function tipoQuarto(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@tipoQuarto/GET_TIPO_QUARTO_SUCCESS': {
        draft.tipoQuarto = action.payload.tipoQuarto;
        break;
      }
      default:
    }
  });
}
