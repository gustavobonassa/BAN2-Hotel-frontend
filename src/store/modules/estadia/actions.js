export function newEstadiaRequest(estadiaInfo) {
  return {
    type: '@estadia/NEW_ESTADIA_REQUEST',
    payload: { estadiaInfo },
  };
}

export function newEstadiaSuccess(estadiaInfo) {
  return {
    type: '@estadia/NEW_ESTADIA_SUCCESS',
    payload: { estadiaInfo },
  };
}

export function delEstadiaRequest(estadiaInfo) {
  return {
    type: '@estadia/DEL_ESTADIA_REQUEST',
    payload: { estadiaInfo },
  };
}

