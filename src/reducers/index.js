import { combineReducers } from "redux";
//import { useReducer } from "react";
import tagReducer from "./tagReducer";
import articleReducer from "./articleReducer";
import loginReducer from "./loginReducer";
import bookReducer from "./bookReducer";
import bookDetailReducer from "./bookDetailReducer";
import authorCategoryReducer from "./authorCategoryReducer";

const rootReducer = combineReducers({
  tag: tagReducer,
  article: articleReducer,
  login: loginReducer,
  book: bookReducer,
  bookDetail: bookDetailReducer,
  authorCategory: authorCategoryReducer,
});

export default rootReducer;
