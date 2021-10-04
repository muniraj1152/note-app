import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.note.pending;

const getNotes = (state: AppState) => state.note.notes;

export const getNotesSelector = createSelector(getNotes, (notes) => notes);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);
