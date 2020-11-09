const {
  BOOK_DETAIL_LOAD,
  BOOK_DETAIL_SUCCESS,
  BOOK_DETAIL_ERROR,
} = require("../constants/action");

const initState = {
  //   id: null,
  //   name: "",
  //   category: {},
  //   author: {},
  //   image: {},
  //   pageNumber: 0,
  //   numberInStore: 0,
  //   publishDate: "",
  //   describe: "",
  data: {},
  isLoading: false,
  error: null,
};

const bookDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case BOOK_DETAIL_LOAD: {
      return { ...state, ...{ isLoading: true } };
    }

    case BOOK_DETAIL_SUCCESS: {
      return {
        ...state,
        data: action.Book,
        isLoading: false,
      };
    }

    case BOOK_DETAIL_ERROR: {
      return { ...state, ...{ isLoading: false, error: action } };
    }

    default:
      return state;
  }
};

export default bookDetailReducer;
