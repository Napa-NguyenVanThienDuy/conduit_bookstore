import {
  BOOK_LIST_LOAD,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_ERROR,
} from "../constants/action";

const initState = {
  books: [],
  authors: [],
  categories: [],
  page: 1,
  size: 10,
  countBook: 0,
  orderBy: "id_ASC",
  isLoading: false,
  error: null,
};

const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case BOOK_LIST_LOAD: {
      return { ...state, ...{ isLoading: true } };
    }

    case BOOK_LIST_SUCCESS: {
      return {
        ...state,
        books: action.books,
        authors: action.authors,
        categories: action.categories,
        page: action.page ? action.page : 1,
        orderBy: action.orderBy,
        countBook: action.countBook,
        isLoading: false,
      };
    }

    case BOOK_LIST_ERROR: {
      return { ...state, ...{ isLoading: false, error: action.payload } };
    }

    default:
      return state;
  }
};

export default bookReducer;
