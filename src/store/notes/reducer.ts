import {
  GET_NOTE_LIST_SUCCESS,
  GET_NOTE_LIST_FAIL,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAIL,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAIL,
  GET_NOTES_BY_TITLE_SUCCESS,
  GET_NOTES_BY_TITLE_FAIL,
  GET_NOTES_BY_CATEGORY_SUCCESS,
  GET_NOTES_BY_CATEGORY_FAIL,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_FAIL,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAIL,
} from './actionTypes';

import { NoteState } from './types';

const initialState: any = {
  pending: false,
  notes: [],
  categoryList: [],
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        notes: action.payload.notes,
        error: null,
      };
    case ADD_NOTE_FAIL:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        notes: action.payload.notes,
        error: null,
      };
    case DELETE_NOTE_FAIL:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    case UPDATE_NOTE_SUCCESS:
      return {
        ...state,
        notes: action.payload.notes,
        error: null,
      };
    case UPDATE_NOTE_FAIL:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    case GET_NOTE_LIST_SUCCESS:
      return {
        ...state,
        notes: action.payload.notes,
        error: null,
      };
    case GET_NOTE_LIST_FAIL:
      return {
        ...state,
        pending: false,
        notes: [],
        error: action.payload.error,
      };
    case GET_NOTES_BY_TITLE_SUCCESS:
      return {
        ...state,
        notes: action.payload.notes,
        error: null,
      };
    case GET_NOTES_BY_TITLE_FAIL:
      return {
        ...state,
        pending: false,
        notes: [],
        error: action.payload.error,
      };
    case GET_NOTES_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        notes: action.payload.notes,
        error: null,
      };
    case GET_NOTES_BY_CATEGORY_FAIL:
      return {
        ...state,
        pending: false,
        notes: [],
        error: action.payload.error,
      };
    case GET_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        categoryList: action.payload.categoryList,
        error: null,
      };
    case GET_CATEGORY_LIST_FAIL:
      return {
        ...state,
        pending: false,
        categoryList: [],
        error: action.payload.error,
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryList: action.payload.categoryList,
        error: null,
      };
    case ADD_CATEGORY_FAIL:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
