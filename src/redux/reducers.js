import * as actionTypes from './actions';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  showToast: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LIST_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      };
    }
    case actionTypes.FETCH_LIST_ERROR: {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    }
    case actionTypes.FETCH_LIST_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionTypes.SHOW_TOAST: {
      return {
        ...state,
        showToast: true,
      };
    }
    case actionTypes.HIDE_TOAST: {
      return {
        ...state,
        showToast: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
