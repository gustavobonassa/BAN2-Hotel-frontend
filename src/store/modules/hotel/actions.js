export function getHotelRequest(id) {
  return {
    type: '@hotel/GET_SINGLE_HOTEL_REQUEST',
    payload: { id },
  };
}

export function getHotelSuccess(hotel) {
  return {
    type: '@hotel/GET_SINGLE_HOTEL_SUCCESS',
    payload: { hotel },
  };
}

export function getHotelsRequest() {
  return {
    type: '@hotel/GET_HOTEL_REQUEST',
  };
}

export function getHotelsSuccess(hotels) {
  return {
    type: '@hotel/GET_HOTEL_SUCCESS',
    payload: { hotels },
  };
}

export function newHotelRequest(hotelInfo) {
  return {
    type: '@hotel/NEW_HOTEL_REQUEST',
    payload: { hotelInfo },
  };
}

export function newHotelSuccess(hotelInfo) {
  return {
    type: '@hotel/NEW_HOTEL_SUCCESS',
    payload: { hotelInfo },
  };
}
