import { takeEvery, call, put } from "redux-saga/effects";
import { BOOK_LIST_LOAD } from "../constants/action";
import { bookSuccess, bookError } from "../actions/book";
import { GET_DATA } from "../graphql/query";
import { fetchBook } from "../service/api";

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

export default function* watchHome() {
  yield takeEvery(BOOK_LIST_LOAD, fetchHome);
}
