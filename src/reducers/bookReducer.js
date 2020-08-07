import {
  BOOK_LIST_LOAD,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_ERROR,
  BOOK_FILTER_LOAD,
  BOOK_FILTER_ERROR,
  BOOK_FILTER_SUCCESS,
} from "../constants/action";

const initState = {
  books: [],
  authors: [],
  categories: [],
  title: "New Bookstore",
  page: 1,
  size: 10,
  countBook: 0,
  orderBy: "id_ASC",
  isLoading: false,
  error: null,
  filter: {},
};

const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case BOOK_LIST_LOAD: {
      return { ...state, ...{ isLoading: true } };
    }

    case BOOK_FILTER_LOAD: {
      return { ...state, ...{ isLoading: true } };
    }

    case BOOK_LIST_SUCCESS: {
      return {
        ...state,
        books: action.books,
        authors: action.authors,
        categories: action.categories,
        page: action.page ? action.page : 0,
        orderBy: action.orderBy,
        countBook: action.countBook,
        isLoading: false,
      };
    }

    case BOOK_FILTER_SUCCESS: {
      return {
        ...state,
        books: action.books,
        page: action.page ? action.page : 1,
        countBook: action.countBook,
        title: action.title ? action.title : "New Bookstore",
        filter: action.filter ? action.filter : "",
        isLoading: false,
      };
    }

    case BOOK_LIST_ERROR: {
      return { ...state, ...{ isLoading: false, error: action } };
    }

    case BOOK_FILTER_ERROR: {
      return { ...state, ...{ isLoading: false, error: action } };
    }

    default:
      return state;
  }
};

export default bookReducer;
