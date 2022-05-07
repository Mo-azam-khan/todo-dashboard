import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import TableLoader from "../Utility/TableLoader/TableLoader";

function ToDoTable({ TodoList, Loader }) {
  return (
    <>
      <Table striped bordered hover responsive="xl">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Task Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Loader ? (
            <TableLoader tdCount={3} trCount={5} />
          ) : (
            TodoList !== undefined &&
            TodoList !== null &&
            TodoList.length !== 0 &&
            TodoList.map((data) => {
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
};

export default React.memo(ToDoTable);
