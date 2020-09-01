export function getEmpregadosRequest() {
  return {
    type: '@empregado/GET_EMPREGADO_REQUEST',
  };
}

export function getEmpregadosSuccess(empregados) {
  return {
    type: '@empregado/GET_EMPREGADO_SUCCESS',
    payload: { empregados },
  };
}

export function newEmpregadoRequest(empregadoInfo) {
  return {
    type: '@empregado/NEW_EMPREGADO_REQUEST',
    payload: { empregadoInfo },
  };
}

export function newEmpregadoSuccess(empregadoInfo) {
  return {
    type: '@empregado/NEW_EMPREGADO_SUCCESS',
    payload: { empregadoInfo },
  };
}
