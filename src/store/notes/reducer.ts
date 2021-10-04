import { FETCH_NOTES_REQUEST } from './actionTypes';

const initialState: any = {
  pending: false,
  notes: [],
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_NOTES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    default:
      return {
        ...state,
      };
  }
};
