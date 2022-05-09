import TodoListDataReducer from "./ToDoListDataReducder";
import { combineReducers } from "redux";

const rootReducer = combineReducers({TodoListData:TodoListDataReducer});

export default rootReducer;