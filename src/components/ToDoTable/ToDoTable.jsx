import React, { useState } from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import TableLoader from "../Utility/TableLoader/TableLoader";
import { BiSort } from "react-icons/bi";
function ToDoTable({ TodoList, Loader, searchValue }) {
  const [SortedData, setSrotedData] = useState(TodoList);

  const handleSorting = (e) => {
    let sortId = e.target.id;
    // setSrotedData((Prevs)=>{
    //   Prevs.sort((a,b)=>(
    //     Number(a[sortId])-Number(b[sortId])
    //   ))
    // })
  };
  return (
    <>
      <Table striped bordered hover responsive="xl">
        <thead>
          <tr onClick={(e) => handleSorting(e)}>
            <th>
              User Id{" "}
              <span id={"userId"}>
                <BiSort />
              </span>
            </th>
            <th>
              Task Name{" "}
              <span id={"title"}>
                <BiSort />
              </span>
            </th>
            <th>
              Status{" "}
              <span id={"completed"}>
                <BiSort />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Loader ? (
            <TableLoader tdCount={3} trCount={5} />
          ) : (
            TodoList !== undefined &&
            TodoList !== null &&
            TodoList.length !== 0 &&
            TodoList.filter((value) => 
                (value.userId.toString().includes(searchValue) ||
                value.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                value.completed
                  .toString()
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()))
            ).map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.userId}</td>
                  <td>{data.title}</td>
                  <td>{data.completed ? "completed" : "not completed"}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </>
  );
}

ToDoTable.propTypes = {
  TodoList: PropTypes.arrayOf(Object),
  Loader: PropTypes.bool,
  searchValue: PropTypes.string,
};

export default React.memo(ToDoTable);
