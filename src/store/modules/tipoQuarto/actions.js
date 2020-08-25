export function getTipoQuartoRequest(idHotel) {
  return {
    type: '@tipoQuarto/GET_TIPO_QUARTO_REQUEST',
    payload: { idHotel },
  };
}

export function getTipoQuartoSuccess(tipoQuarto) {
  return {
    type: '@tipoQuarto/GET_TIPO_QUARTO_SUCCESS',
    payload: { tipoQuarto },
  };
}

export function newTipoQuartoRequest(tipoQuartoInfo) {
  return {
    type: '@tipoQuarto/NEW_TIPO_QUARTO_REQUEST',
    payload: { tipoQuartoInfo },
  };
}

export function newTipoQuartoSuccess(tipoQuartoInfo) {
  return {
    type: '@tipoQuarto/NEW_TIPO_QUARTO_SUCCESS',
    payload: { tipoQuartoInfo },
  };
}
