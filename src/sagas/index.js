import { all, fork } from "redux-saga/effects";
import tagSaga from "./tagSaga";
import articleSaga from "./articleSaga";
import loginSaga from "./loginSaga";
import bookSaga from "./bookSaga";
import authorCategorySaga from "./authorCategorySaga";

export default function* () {
  yield all([
    fork(tagSaga),
    fork(articleSaga),
    fork(loginSaga),
    fork(bookSaga),
    fork(authorCategorySaga),
  ]);
}
