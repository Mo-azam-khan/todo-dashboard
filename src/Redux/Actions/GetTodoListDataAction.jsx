import {
  TODO_LIST_DATA_REQUEST,
  TODO_LIST_DATA_SUCCESS,
  TODO_LIST_DATA_FAIL,
} from "../Constants/TodoTableConstants";
import axios from "axios";
import { GET_TODO_LIST_DATA } from "../../EndPoints/EndPoints";
export const getTodoListData = () => (dispatch) => {
  dispatch({ type: TODO_LIST_DATA_REQUEST });

  axios
    .get(GET_TODO_LIST_DATA)
    .then((res) => {
      dispatch({ type: TODO_LIST_DATA_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: TODO_LIST_DATA_FAIL, payload: error });
    });
};
