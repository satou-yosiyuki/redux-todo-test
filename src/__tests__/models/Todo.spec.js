import Todo from "../../models/Todo";
// オブジェクトの値、型の比較を行う場合は toStrictEqual
// expect は値をテストしたい時に毎回使用する関数
describe("models/Todo.jsのテスト", () => {
  // getterのテスト
  it("this._textのgetterを持つ", () => {
    const text = "だみー";
    const todo = new Todo(text);

    expect(todo.text).toStrictEqual(text);
  });

  it("hasCompletedメソッドを実行するとthis._completedの値が取得できる", () => {
    const todo = new Todo("だみー");
    expect(todo.hasCompleted()).toStrictEqual(todo._completed);
  });
  it("toggleメソッドを実行するとthis._completedのboolean値が切り替わる", () => {
    const todo = new Todo("だみ-");
    expect(todo._completed).toStrictEqual(false);
    todo.toggle();
    expect(todo._completed).toStrictEqual(true);
  });
});
