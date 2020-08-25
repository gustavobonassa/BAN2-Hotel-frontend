import produce from 'immer';

const INITIAL_STATE = {
  quarto: [],
};

export default function quarto(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@quarto/GET_QUARTO_SUCCESS': {
        draft.quarto = action.payload.quarto;
        break;
      }
      default:
    }
  });
}
