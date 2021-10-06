import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.note.pending;

const getNotes = (state: AppState) => state.note.notes;

const getCategoryList = (state: AppState) => state.note.categoryList;

/**
 * getCategoryListWithCount method used to get category name with count of notes per category
 * @param state
 */
const getCategoryListWithCount = (state: AppState) => {
  const categoryList: any = [];
  const list: any = localStorage.getItem('notes');
  const notes: any = JSON.parse(list);
  state.note.categoryList &&
    state.note.categoryList.map((category: any) => {
      const list =
        notes &&
        notes.filter((note: any) => {
          return note.category === category;
        });
      const categoryObj = {
        categoryName: category,
        count: list ? list.length : 0,
      };
      categoryList.push(categoryObj);
    });
  return categoryList;
};

export const getCategoryListSelector = createSelector(
  getCategoryList,
  (categories) => categories
);

export const getCategoryListWithCountSelector = createSelector(
  getCategoryListWithCount,
  (categories) => categories
);

export const getNotesSelector = createSelector(getNotes, (notes) => notes);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);
