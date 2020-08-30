import produce from 'immer';

const INITIAL_STATE = {
  reserva: [],
};

export default function reserva(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@reserva/GET_QUARTO_SUCCESS': {
        draft.reserva = action.payload.reserva;
        break;
      }
      default:
    }
  });
}
