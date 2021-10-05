import { GET_NOTE_LIST } from './actionTypes';

export interface FetchNotesRequest {
  type: typeof GET_NOTE_LIST;
}

export type NotesActions = FetchNotesRequest;

export interface INote {
  id: number;
  title: string;
  description: string;
  category: string;
}

export interface NoteState {
  pending: boolean;
  notes: [];
  categoryList: [];
  error: string | null;
}
