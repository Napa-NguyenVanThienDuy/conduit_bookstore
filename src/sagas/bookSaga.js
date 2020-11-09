import { takeLatest, call, put } from "redux-saga/effects";
import {
  BOOK_LIST_LOAD,
  BOOK_FILTER_LOAD,
  BOOK_DETAIL_LOAD,
} from "../constants/action";
import {
  bookSuccess,
  bookError,
  filterError,
  filterSuccess,
  detailSuccess,
  detailError,
} from "../actions/book";
import { GET_DATA, GET_FILTER_BOOK, GET_BOOK } from "../graphql/query";
import { fetchBook, fetchFilterBook } from "../service/api";

export function* fetchHome(action) {
  try {
    const { orderBy, page, offset, size } = action;
    const variables = { orderBy, offset, size };
    const data = yield call(fetchBook, GET_DATA, variables);
    const { books, categories, authors } = data.data;
    const { count } = data.data._allBooksMeta;
    const bookstore = {
      books: books,
      categories: categories,
      authors: authors,
      countBook: count,
      page: page,
      orderBy: orderBy,
    };
    yield put(bookSuccess(bookstore));
  } catch (error) {
    yield put(bookError(error.toString()));
  }
}

export function* fetchFilter(action) {
  try {
    const { page, offset, size, filter } = action;
    const { author, category } = filter;
    const variables = { offset, size, author, category };
    const data = yield call(fetchFilterBook, GET_FILTER_BOOK, variables);
    const title =
      author || category ? author.name_in || category.name_in : "New Bookstore";
    const { count } = data.data._allBooksMeta;
    const { books } = data.data;
    const filterBook = {
      books: books,
      countBook: count,
      page: page,
      title: title,
      filter: filter,
    };
    yield put(filterSuccess(filterBook));
  } catch (error) {
    yield put(filterError(error.toString()));
  }
}

export function* fetchBookDetail(action) {
  try {
    const id = action.slug;
    const variables = { id };
    const data = yield call(fetchBook, GET_BOOK, variables);
    yield put(detailSuccess(data.data));
  } catch (error) {
    yield put(detailError(error.toString()));
  }
}

export default function* watchHome() {
  yield takeLatest(BOOK_LIST_LOAD, fetchHome);
  yield takeLatest(BOOK_FILTER_LOAD, fetchFilter);
  yield takeLatest(BOOK_DETAIL_LOAD, fetchBookDetail);
}
