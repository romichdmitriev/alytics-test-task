import {
  TABLE_DATA_ERROR,
  TABLE_DATA_FETCHING,
  TABLE_DATA_SUCCESS,
  TABLE_DATA_SORT,
  TABLE_DATA_SORTING_TYPE,
} from '../actionTypes';

const initialState = {
  data: [],
  unsortedData: [],
  isFetching: false,
  error: '',
  sortingType: '',
};

const tableDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case TABLE_DATA_FETCHING:
      return { ...state, isFetching: action.payload };
    case TABLE_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        unsortedData: action.payload,
      };
    case TABLE_DATA_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case TABLE_DATA_SORT:
      return { ...state, data: action.payload };
    case TABLE_DATA_SORTING_TYPE:
      return { ...state, sortingType: action.payload };
    default:
      return state;
  }
};

export default tableDataReducer;
