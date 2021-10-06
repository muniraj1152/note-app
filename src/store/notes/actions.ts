import {
  GET_NOTE_LIST,
  GET_NOTE_LIST_SUCCESS,
  GET_NOTE_LIST_FAIL,
  ADD_NOTE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAIL,
  DELETE_NOTE,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
  UPDATE_NOTE,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAIL,
  GET_NOTES_BY_TITLE,
  GET_NOTES_BY_TITLE_SUCCESS,
  GET_NOTES_BY_TITLE_FAIL,
  GET_NOTES_BY_CATEGORY,
  GET_NOTES_BY_CATEGORY_SUCCESS,
  GET_NOTES_BY_CATEGORY_FAIL,
  GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_FAIL,
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAIL,
} from './actionTypes';

/**
 * Getting list of available notes
 */
export const getNoteList = (): any => ({
  type: GET_NOTE_LIST,
});

export const getNoteListSuccess = (payload: any): any => ({
  type: GET_NOTE_LIST_SUCCESS,
  payload,
});

export const getNoteListFail = (payload: any): any => ({
  type: GET_NOTE_LIST_FAIL,
  payload,
});

/**
 * Add new note in existing notes list with title, category and description
 */
export const addNote = (payload: any): any => ({
  type: ADD_NOTE,
  payload,
});

export const addNoteSuccess = (payload: any): any => ({
  type: ADD_NOTE_SUCCESS,
  payload,
});

export const addNoteFail = (payload: any): any => ({
  type: ADD_NOTE_FAIL,
  payload,
});

/**
 * Delete note in existing notes list using id
 */
export const deleteNote = (payload: any): any => ({
  type: DELETE_NOTE,
  payload,
});

export const deleteNoteSuccess = (payload: any): any => ({
  type: DELETE_NOTE_SUCCESS,
  payload,
});

export const deleteNoteFail = (payload: any): any => ({
  type: DELETE_NOTE_FAIL,
  payload,
});

/**
 * Update note in existing notes list with title, category and description
 */
export const updateNote = (payload: any): any => ({
  type: UPDATE_NOTE,
  payload,
});

export const updateNoteSuccess = (payload: any): any => ({
  type: UPDATE_NOTE_SUCCESS,
  payload,
});

export const updateNoteFail = (payload: any): any => ({
  type: UPDATE_NOTE_FAIL,
  payload,
});

/**
 * getNotesByTitle used while search notes by title
 */
export const getNotesByTitle = (payload: any): any => ({
  type: GET_NOTES_BY_TITLE,
  payload,
});

export const getNotesByTitleSuccess = (payload: any): any => ({
  type: GET_NOTES_BY_TITLE_SUCCESS,
  payload,
});

export const getNotesByTitleFail = (payload: any): any => ({
  type: GET_NOTES_BY_TITLE_FAIL,
  payload,
});

/**
 * getNotesByCategory used while filter notes by category
 */
export const getNotesByCategory = (payload: any): any => ({
  type: GET_NOTES_BY_CATEGORY,
  payload,
});

export const getNotesByCategorySuccess = (payload: any): any => ({
  type: GET_NOTES_BY_CATEGORY_SUCCESS,
  payload,
});

export const getNotesByCategoryFail = (payload: any): any => ({
  type: GET_NOTES_BY_CATEGORY_FAIL,
  payload,
});

export const getCategoryList = (): any => ({
  type: GET_CATEGORY_LIST,
});

export const getCatgoryListSuccess = (payload: any): any => ({
  type: GET_CATEGORY_LIST_SUCCESS,
  payload,
});

export const getCatgoryListFail = (payload: any): any => ({
  type: GET_CATEGORY_LIST_FAIL,
  payload,
});

export const addCategory = (payload: any): any => ({
  type: ADD_CATEGORY,
  payload,
});

export const addCategorySuccess = (payload: any): any => ({
  type: ADD_CATEGORY_SUCCESS,
  payload,
});

export const addCategoryFail = (payload: any): any => ({
  type: ADD_CATEGORY_FAIL,
  payload,
});
