import {
  TABLE_DATA_FETCHING,
  TABLE_DATA_SUCCESS,
  TABLE_DATA_ERROR,
  TABLE_DATA_SORT,
  TABLE_DATA_SORTING_TYPE,
} from '../actionTypes';

export const fetchTableDataStart = () => ({ type: TABLE_DATA_FETCHING, payload: true });

export const fetchTableDataSuccess = data => ({ type: TABLE_DATA_SUCCESS, payload: data });

export const fetchTableDataFailure = error => ({ type: TABLE_DATA_ERROR, payload: error });

export const sortTableData = sortedData => ({ type: TABLE_DATA_SORT, payload: sortedData });

export const setSortingType = sortingType => ({ type: TABLE_DATA_SORTING_TYPE, payload: sortingType });
