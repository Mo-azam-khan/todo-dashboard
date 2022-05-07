import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDoTable from "../ToDoTable/ToDoTable";
import { getTodoListData } from "../../Redux/Actions/GetTodoListDataAction";
function ToDoContainer() {
  const dispatch = useDispatch();
  const Loader = useSelector((data) => data.TodoListData.isTodoDataLoading);
  const TodoList = useSelector((data) => data.TodoListData.todoListData);
  useEffect(() => {
    dispatch(getTodoListData());
  }, []);
  return (
    <>
      <ToDoTable TodoList={TodoList} Loader={Loader} />
    </>
  );
}

export default ToDoContainer;
