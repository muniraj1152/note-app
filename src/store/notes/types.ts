import { FETCH_NOTES_REQUEST } from './actionTypes';

export interface FetchNotesRequest {
  type: typeof FETCH_NOTES_REQUEST;
}

export type NotesActions = FetchNotesRequest;
