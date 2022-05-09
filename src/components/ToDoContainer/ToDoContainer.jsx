import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { Form, Pagination } from "react-bootstrap";
import "./ToDoContainer.css";
import ToDoTable from "../ToDoTable/ToDoTable";
import { getTodoListData } from "../../Redux/Actions/GetTodoListDataAction";
function ToDoContainer() {
  const dispatch = useDispatch();
  const Loader = useSelector((data) => data.TodoListData.isTodoDataLoading);
  const TodoList = useSelector((data) => data.TodoListData.todoListData);
  const [searchValue, setSearchValue] = useState("");
  const [pagesCount, setPagesCount] = useState([1]);
  const [selectePage, setSelectePage] = useState(1);
  const [paginatedList, setPaginatedList] = useState(TodoList)
  useEffect(() => {
    dispatch(getTodoListData());
  },[]);

  useEffect(() => {
    setPagesCount([ ...Array(Math.ceil(TodoList.length/10)).keys() ].map( i => i+1));
  }, [TodoList.length]);

  useEffect(() => {
    setPaginatedList(TodoList.slice(Math.ceil((selectePage-1)*10),Math.ceil(selectePage*10)))
  }, [selectePage]);
  
  const InputSearch = (text) => {
    setSearchValue(text);
  };
  const handleTextInput = debounce((text) => {
    InputSearch(text);
  }, 500);
  const handlePagination =(e)=>{
    if(e.target.id==="PREVS")
    {
      setSelectePage((Prevs)=>(Prevs-1));
    }
    else if(e.target.id === "NEXT")
    {
      setSelectePage((Prevs)=>(Prevs+1));
    }
    else{
      setSelectePage(Number(e.target.id));
    }
   
  }
  return (
    <>
      <div className="input-Search-container">
        <Form.Control
          onChange={(e) => handleTextInput(e.target.value)}
          type="text"
          placeholder="Search"
        />
      </div>
      <ToDoTable
        TodoList={paginatedList}
        Loader={Loader}
        searchValue={searchValue}
      />
      <div className="pagination-container" >
        <Pagination onClick={(e)=>handlePagination(e)}>
          <Pagination.Prev id={"PREVS"} />

          {pagesCount !== undefined &&
            pagesCount !== null &&
            pagesCount.length !== 0 &&
            pagesCount.filter((data)=>data<4).map((data) => {
              return <Pagination.Item id={data} active={data === Number(selectePage)}>{data}</Pagination.Item>;
            })}

          <Pagination.Ellipsis />

          {pagesCount !== undefined &&
            pagesCount !== null &&
            pagesCount.length !== 0 &&
            pagesCount.filter((data)=>(data>((TodoList.length/10)-3))).map((data) => {
              return <Pagination.Item id={data} active={data === Number(selectePage)}>{data}</Pagination.Item>;
            })}
          <Pagination.Next id={"NEXT"} />
        </Pagination>
      </div>
    </>
  );
}

export default ToDoContainer;
