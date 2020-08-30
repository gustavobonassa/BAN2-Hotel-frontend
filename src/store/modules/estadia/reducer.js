import produce from 'immer';

const INITIAL_STATE = {
  estadia: [],
};

export default function estadia(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@estadia/GET_QUARTO_SUCCESS': {
        draft.estadia = action.payload.estadia;
        break;
      }
      default:
    }
  });
}
