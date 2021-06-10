export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO_COMPLETED = "TOGGLE_TODO_COMPLETED";
// text:textのようにプロパティ名と同じ場合は引数名が同じ場合は
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

export const deleteTodo = (index) => {
  return {
    type: DELETE_TODO,
    index,
  };
};

export const toggleTodoCompleted = (index) => {
  return {
    type: TOGGLE_TODO_COMPLETED,
    index,
  };
};
