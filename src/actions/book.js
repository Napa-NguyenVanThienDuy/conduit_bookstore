import {
  BOOK_LIST_LOAD,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_ERROR,
  AUTHOR_CATEGORY_LOAD,
  AUTHOR_CATEGORY_SUCCESS,
  AUTHOR_CATEGORY_ERROR,
} from "../constants/action";

const action = (type, payload = {}) => {
  return { type, ...payload };
};

export const bookLoad = (orderBy, page, offset, size) => {
  return action(BOOK_LIST_LOAD, { orderBy, page, offset, size });
};

export const bookSuccess = (payload) => {
  return action(BOOK_LIST_SUCCESS, payload);
};

export const bookError = (payload) => {
  return action(BOOK_LIST_ERROR, payload);
};

export const authorCategoryLoad = (payload) => {
  return action(AUTHOR_CATEGORY_LOAD, payload);
};

export const authorCategorySuccess = (payload) => {
  return action(AUTHOR_CATEGORY_SUCCESS, payload);
};

export const authorCategoryError = (payload) => {
  return action(AUTHOR_CATEGORY_ERROR, payload);
};
