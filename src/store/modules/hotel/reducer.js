import produce from 'immer';

const INITIAL_STATE = {
  hotels: [],
  hotel: {},
};

export default function hotel(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@hotel/GET_HOTEL_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@hotel/GET_HOTEL_SUCCESS': {
        draft.hotels = action.payload.hotels;
        break;
      }
      case '@hotel/GET_SINGLE_HOTEL_SUCCESS': {
        draft.hotel = action.payload.hotel;
        break;
      }
      default:
    }
  });
}
