export function getClientesRequest() {
  return {
    type: '@cliente/GET_CLIENTE_REQUEST',
  };
}

export function getClientesSuccess(clientes) {
  return {
    type: '@cliente/GET_CLIENTE_SUCCESS',
    payload: { clientes },
  };
}

export function newClienteRequest(clienteInfo) {
  return {
    type: '@cliente/NEW_CLIENTE_REQUEST',
    payload: { clienteInfo },
  };
}

export function newClienteSuccess(clienteInfo) {
  return {
    type: '@cliente/NEW_CLIENTE_SUCCESS',
    payload: { clienteInfo },
  };
}
