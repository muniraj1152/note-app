import { FETCH_NOTES_REQUEST } from './actionTypes';
import { FetchNotesRequest } from './types';

export const fetchNotesRequest = (): FetchNotesRequest => ({
  type: FETCH_NOTES_REQUEST,
});
