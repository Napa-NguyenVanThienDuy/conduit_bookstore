import { fetchAuthorCategory } from "../service/api";
import { GET_AUTHOR_CATEGORY } from "../graphql/query";
import { put, takeEvery, call } from "redux-saga/effects";
import { authorCategorySuccess, authorCategoryError } from "../actions/book";
import { AUTHOR_CATEGORY_LOAD } from "../constants/action";

export function* fetchMenu() {
  try {
    const data = yield call(fetchAuthorCategory, GET_AUTHOR_CATEGORY);
    const { authors, categories } = data.data;
    console.log("saga", data);
    const dataAuthorCategory = {
      authors: authors,
      categories: categories,
    };
    yield put(authorCategorySuccess(dataAuthorCategory));
  } catch (error) {
    yield put(authorCategoryError);
  }
}

export default function* watchMenu() {
  yield takeEvery(AUTHOR_CATEGORY_LOAD, fetchAuthorCategory);
}
