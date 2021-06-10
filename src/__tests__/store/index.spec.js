import store from "../../store";
import { SHOW_ALL } from "../../actions/visibleFilterActionCreator";

describe("store/index.jsのてすと", () => {
  it("combineReducersを使ったstateを持つ", () => {
    expect(store.getState()).toStrictEqual({
      todos: [],
      visibleFilter: SHOW_ALL
    });
  });
});
