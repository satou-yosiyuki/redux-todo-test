import { todoReducer } from "../../reducers/todoReducer";
import {
  addTodo,
  deleteTodo,
  toggleTodoCompleted,
} from "../../actions/todoActionCreator";
import Todo from "../../models/Todo";

describe("todoReducerのテスト", () => {
  it("action.type==ADD_TODOの時,TODO１件追加した並列を返す", () => {
    const dummyText = "ダミーテキスト";
    const action = addTodo(dummyText);
    const initialState = [];
    const newState = todoReducer(initialState, action);
    const todo = new Todo(dummyText);
    expect(newState).toStrictEqual([todo]);
  });
  it("action.type===DELETE_TODOの時,index番号の要素を削除した", () => {
    // テスト動作確認用のデータ
    const prefixTest = "テスト";

    let state = [];
    for (let i = 0; i < 3; i++) {
      const text = prefixTest + i;
      const action = addTodo(text);
      state = todoReducer(state, action);
    }
    const todo0 = new Todo(`${prefixTest}0`);
    const todo1 = new Todo(`${prefixTest}1`);
    const todo2 = new Todo(`${prefixTest}2`);

    expect(state).toStrictEqual([todo0, todo1, todo2]);

    const targetIndex = 1;
    const deleteAction = deleteTodo(targetIndex);
    state = todoReducer(state, deleteAction);
    expect(state).toStrictEqual([todo0, todo2]);
  });
  it("action.type===TOGGLE_TODO_COMPLETEDのとき、index番号の要素のcompletedが切り替わった配列を返す", () => {
    let state = [];
    const addAction = addTodo("だみー");
    const targetIndex = 0;
    state = todoReducer(state, addAction);

    expect(state[targetIndex].hasCompleted()).toStrictEqual(false);

    const toggleAction = toggleTodoCompleted(targetIndex);
    state = todoReducer(state, toggleAction);
    expect(state[targetIndex].hasCompleted()).toStrictEqual(true);
  });
});
