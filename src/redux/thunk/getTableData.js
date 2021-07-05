import { fetchTableDataFailure, fetchTableDataStart, fetchTableDataSuccess } from '../actions/tableDataActions';
import { tableData } from '../../tableData/tableData';

export const getTableData = () => {
  return dispatch => {
    try {
      dispatch(fetchTableDataStart());
      dispatch(fetchTableDataSuccess(tableData));
    }
    catch (error) {
      dispatch(fetchTableDataFailure(error));
    }
  };
};
