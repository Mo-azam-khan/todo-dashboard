import axios from "axios";
import React, { useEffect, useState } from "react";
import ToDoTable from "../ToDoTable/ToDoTable";
import { GET_TODO_LIST_DATA } from "../../EndPoints/EndPoints";
function ToDoContainer() {
  const [TodoList, setTodoList] = useState([]);
  const [Loader, setLoader] = useState(true);

  useEffect(() => {
    const getTodoListData = () => {
      axios
        .get(GET_TODO_LIST_DATA)
        .then((res) => {
          setLoader(false);

          setTodoList(res.data);
        })
        .catch((error) => {
          setLoader(false);
          console.log("error", error);
        });
    };
    getTodoListData();
  }, []);
  return (
    <>
      <ToDoTable TodoList={TodoList} Loader={Loader} />
    </>
  );
}

export default ToDoContainer;
