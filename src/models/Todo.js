class Todo {
  constructor(text) {
    this._text = text;
    this._completed = false;
  }
  // ゲッターメソッド経由で値を取得する
  get text() {
    return this._text;
  }
// テスト通らない →hacになっていた
  hasCompleted() {
    return this._completed;
  }
  
  // 真偽値を反転させるもの
  toggle() {
    this._completed = !this._completed;
  }
}

export default Todo;