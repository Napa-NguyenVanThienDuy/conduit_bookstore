import {
  AUTHOR_CATEGORY_LOAD,
  AUTHOR_CATEGORY_SUCCESS,
  AUTHOR_CATEGORY_ERROR,
} from "../constants/action";

const initState = {
  authors: [],
  categories: [],
  isLoading: false,
  error: null,
};

const authorCategoryReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTHOR_CATEGORY_LOAD: {
      return { ...state, ...{ isLoading: true } };
    }

    case AUTHOR_CATEGORY_SUCCESS: {
      return {
        ...state,
        authors: action.authors,
        categories: action.categories,
        isLoading: false,
      };
    }

    case AUTHOR_CATEGORY_ERROR: {
      return { ...state, ...{ isLoading: false, error: action.payload } };
    }
    default:
      return state;
  }
};

export default authorCategoryReducer;
