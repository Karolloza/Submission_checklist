export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_ERROR = 'FETCH_LIST_ERROR';
export const FETCH_LIST_PENDING = 'FETCH_LIST_PENDING';

export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';

export const fetchListSuccess = (payload) => ({
  type: FETCH_LIST_SUCCESS,
  payload,
});

export const fetchListError = (error) => ({
  type: FETCH_LIST_ERROR,
  error,
});
export const fetchListPending = () => ({
  type: FETCH_LIST_PENDING,
});

export const showToast = () => ({
  type: SHOW_TOAST,
});
export const hideToast = () => ({
  type: HIDE_TOAST,
});