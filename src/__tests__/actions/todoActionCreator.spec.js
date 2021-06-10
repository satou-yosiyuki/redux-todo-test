import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO_COMPLETED,
  addTodo,
  deleteTodo,
  toggleTodoCompleted,
} from "../../actions/todoActionCreator";

describe('todoActionCreatorのテスト',()=>{
  it('addTodo関数のテスト',()=>{
    const dummyText='ダミーテキスト';
    const action=addTodo(dummyText);
    expect(action).toStrictEqual(
      {
        type: ADD_TODO,
        text: dummyText
      }
    );
  });
  it('deleteTodo関数のテスト',()=>{
const indexValue=1;
const action=deleteTodo(indexValue);
expect(action).toStrictEqual(
  {
    type:DELETE_TODO,
    index: indexValue
  }
);
  });
  it('toggleTodoCompleted',()=>{
    const indexValue=1;
    const action=toggleTodoCompleted(indexValue);
    expect(action).toStrictEqual(
      {
        type: TOGGLE_TODO_COMPLETED,
        index: indexValue
      }
    )
  })
});