export function getQuartoRequest(idHotel) {
  return {
    type: '@quarto/GET_QUARTO_REQUEST',
    payload: { idHotel },
  };
}

export function getQuartoSuccess(quarto) {
  return {
    type: '@quarto/GET_QUARTO_SUCCESS',
    payload: { quarto },
  };
}

export function newQuartoRequest(quartoInfo) {
  return {
    type: '@quarto/NEW_QUARTO_REQUEST',
    payload: { quartoInfo },
  };
}

export function newQuartoSuccess(quartoInfo) {
  return {
    type: '@quarto/NEW_QUARTO_SUCCESS',
    payload: { quartoInfo },
  };
}
