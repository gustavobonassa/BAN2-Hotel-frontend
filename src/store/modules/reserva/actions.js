export function newReservaRequest(reservaInfo) {
  return {
    type: '@reserva/NEW_RESERVA_REQUEST',
    payload: { reservaInfo },
  };
}

export function newReservaSuccess(reservaInfo) {
  return {
    type: '@reserva/NEW_RESERVA_SUCCESS',
    payload: { reservaInfo },
  };
}

export function delReservaRequest(reservaInfo) {
  return {
    type: '@reserva/DEL_RESERVA_REQUEST',
    payload: { reservaInfo },
  };
}

