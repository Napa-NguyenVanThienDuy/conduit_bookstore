import { combineReducers } from "redux";
//import { useReducer } from "react";
import tagReducer from "./tagReducer";
import articleReducer from "./articleReducer";
import loginReducer from "./loginReducer";
import bookReducer from "./bookReducer";
import authorCategoryReducer from "./authorCategoryReducer";

const rootReducer = combineReducers({
  tag: tagReducer,
  article: articleReducer,
  login: loginReducer,
  book: bookReducer,
  authorCategory: authorCategoryReducer,
});

export default rootReducer;
