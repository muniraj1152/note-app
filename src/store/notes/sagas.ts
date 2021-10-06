import { SagaIterator } from 'redux-saga';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_NOTE_LIST,
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  GET_CATEGORY_LIST,
  ADD_CATEGORY,
  GET_NOTES_BY_TITLE,
  GET_NOTES_BY_CATEGORY,
} from './actionTypes';
import {
  getNoteListSuccess,
  getNoteListFail,
  addNoteSuccess,
  addNoteFail,
  deleteNoteSuccess,
  deleteNoteFail,
  updateNoteSuccess,
  updateNoteFail,
  getNotesByTitleSuccess,
  getNotesByTitleFail,
  getNotesByCategorySuccess,
  getNotesByCategoryFail,
  getCatgoryListSuccess,
  getCatgoryListFail,
  addCategorySuccess,
  addCategoryFail,
} from './actions';

const getNoteList = () => {
  const list: any = localStorage.getItem('notes');
  return JSON.parse(list);
};

const addNote = (note: any) => {
  const list: any = localStorage.getItem('notes');
  const notesList: any = JSON.parse(list) ? JSON.parse(list) : [];
  if (!notesList) {
    localStorage.setItem('lastNoteId', '1');
  } else {
    const id = Number(localStorage.getItem('lastNoteId'));
    localStorage.setItem('lastNoteId', `${id + 1}`);
  }
  note.id = localStorage.getItem('lastNoteId');
  notesList.push(note);
  localStorage.setItem('notes', JSON.stringify(notesList));
  return notesList;
};

const deleteNote = (id: any) => {
  const list: any = localStorage.getItem('notes');
  const notesList: any = JSON.parse(list) ? JSON.parse(list) : [];
  const index = notesList.findIndex((note: any) => {
    return note.id === id;
  });
  if (index !== -1) notesList.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notesList));
  return notesList;
};

const updateNote = (note: any) => {
  const list: any = localStorage.getItem('notes');
  const notesList: any = JSON.parse(list) ? JSON.parse(list) : [];
  let noteIndex: any = null;
  notesList &&
    notesList.map((item: any, index: number) => {
      if (Number(item.id) === Number(note.id)) {
        noteIndex = index;
      }
    });
  notesList[noteIndex] = note;
  localStorage.setItem('notes', JSON.stringify(notesList));
  return notesList;
};

const getNotesByTitle = (searchText: any) => {
  const list: any = localStorage.getItem('notes');
  const notes = JSON.parse(list) ? JSON.parse(list) : [];
  const notesList =
    notes &&
    notes.filter((note: any) => {
      return note.title.toLowerCase().includes(searchText);
    });
  return notesList;
};

const getNotesByCategory = (category: any) => {
  const list: any = localStorage.getItem('notes');
  const notes = JSON.parse(list) ? JSON.parse(list) : [];
  if (!category) {
    return notes;
  }
  const notesList =
    notes &&
    notes.filter((note: any) => {
      return note.category === category;
    });
  return notesList;
};

const getCategoryList = () => {
  const list: any = localStorage.getItem('categoryList');
  return JSON.parse(list);
};

const addCategory = (categoryValue: any) => {
  const list: any = localStorage.getItem('categoryList');
  const categoryList: any = JSON.parse(list) ? JSON.parse(list) : [];
  if (categoryList.includes(categoryValue)) {
    alert('category already exist');
  } else {
    categoryList.push(categoryValue);
    localStorage.setItem('categoryList', JSON.stringify(categoryList));
  }
  return categoryList;
};

/*
  Worker Saga: Fired on GET_NOTE_LIST action
*/
function* getNoteListSaga(): SagaIterator {
  try {
    const response = yield call(getNoteList);
    yield put(
      getNoteListSuccess({
        notes: response,
      })
    );
  } catch (e: any) {
    yield put(
      getNoteListFail({
        error: e.message,
      })
    );
  }
}

/*
  Worker Saga: Fired on ADD_NOTE action
*/
function* addNoteSaga({ payload }: any): SagaIterator {
  try {
    const response = yield call(addNote, payload);
    yield put(
      addNoteSuccess({
        notes: response,
      })
    );
  } catch (e: any) {
    yield put(
      addNoteFail({
        error: e.message,
      })
    );
  }
}

/*
  Worker Saga: Fired on DELETE_NOTE action
*/
function* deleteNoteSaga({ payload }: any): SagaIterator {
  try {
    const response = yield call(deleteNote, payload);
    yield put(
      deleteNoteSuccess({
        notes: response,
      })
    );
  } catch (e: any) {
    yield put(
      deleteNoteFail({
        error: e.message,
      })
    );
  }
}

/*
  Worker Saga: Fired on DELETE_NOTE action
*/
function* updateNoteSaga({ payload }: any): SagaIterator {
  try {
    const response = yield call(updateNote, payload);
    yield put(
      updateNoteSuccess({
        notes: response,
      })
    );
  } catch (e: any) {
    yield put(
      updateNoteFail({
        error: e.message,
      })
    );
  }
}

/*
  Worker Saga: Fired on GET_NOTES_BY_TITLE action
*/
function* getNotesByTitleSaga({ payload }: any): SagaIterator {
  try {
    const response = yield call(getNotesByTitle, payload);
    yield put(
      getNotesByTitleSuccess({
        notes: response,
      })
    );
  } catch (e: any) {
    yield put(
      getNotesByTitleFail({
        error: e.message,
      })
    );
  }
}

/*
  Worker Saga: Fired on GET_NOTES_BY_CATEGORY action
*/
function* getNotesByCategorySaga({ payload }: any): SagaIterator {
  try {
    const response = yield call(getNotesByCategory, payload);
    yield put(
      getNotesByCategorySuccess({
        notes: response,
      })
    );
  } catch (e: any) {
    yield put(
      getNotesByCategoryFail({
        error: e.message,
      })
    );
  }
}

/*
  Worker Saga: Fired on GET_CATEGORY_LIST action
*/
function* getCategoryListSaga(): SagaIterator {
  try {
    const response = yield call(getCategoryList);
    yield put(
      getCatgoryListSuccess({
        categoryList: response,
      })
    );
  } catch (e: any) {
    yield put(
      getCatgoryListFail({
        error: e.message,
      })
    );
  }
}

/*
  Worker Saga: Fired on ADD_CATEGORY action
*/
function* addCategorySaga({ payload }: any): SagaIterator {
  try {
    const response = yield call(addCategory, payload);
    yield put(
      addCategorySuccess({
        categoryList: response,
      })
    );
  } catch (e: any) {
    yield put(
      addCategoryFail({
        error: e.message,
      })
    );
  }
}

function* noteSaga() {
  yield all([
    takeLatest(ADD_NOTE, addNoteSaga),
    takeLatest(DELETE_NOTE, deleteNoteSaga),
    takeLatest(UPDATE_NOTE, updateNoteSaga),
    takeLatest(GET_NOTE_LIST, getNoteListSaga),
    takeLatest(GET_NOTES_BY_TITLE, getNotesByTitleSaga),
    takeLatest(GET_NOTES_BY_CATEGORY, getNotesByCategorySaga),
    takeLatest(GET_CATEGORY_LIST, getCategoryListSaga),
    takeLatest(ADD_CATEGORY, addCategorySaga),
  ]);
}

export default noteSaga;
