import {
    TODO_LIST_DATA_REQUEST,
    TODO_LIST_DATA_SUCCESS,
    TODO_LIST_DATA_FAIL,
  } from "../Constants/TodoTableConstants";

  const InitialState ={
      isTodoDataLoading:true,
    todoListData:[],
    todoError:""
  }

  const TodoListDataReducer =(state=InitialState, action)=>{
      switch(action.type){
          case TODO_LIST_DATA_REQUEST:
              return{
                  ...state,
                  isTodoDataLoading:true,  
              }
              case TODO_LIST_DATA_SUCCESS:
              return{
                  ...state,
                  isTodoDataLoading:false,
                  todoListData:action.payload
              }
              case TODO_LIST_DATA_FAIL:
              return{
                  ...state,
                  isTodoDataLoading:false,
                  todoListData:[],
                  todoError:action.payload
              }
              default:
                  return {...state};
      }
  }

  export default TodoListDataReducer;