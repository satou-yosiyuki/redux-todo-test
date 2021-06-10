import { visibleFilterReducer } from "../../reducers/visibleFilterReducer"; 

import {
  showAll,
  showActive,
  showCompleted,
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from "../../actions/visibleFilterActionCreator";

describe("visibleFilterReducerのテスト", () => {
  const createInitialState = () => {
    const mockAction = {};
    const state = visibleFilterReducer(undefined, mockAction);
    return state;
  };
  it("stateの初期値はSHOW_ALL", () => {
    const state = createInitialState();
    expect(state).toStrictEqual(SHOW_ALL);
  });
  it("action.type===SHOW_ALLの時文字列SHOW_ALLを返す", () => {
    const state = createInitialState();

    const action = showAll();
    const newState = visibleFilterReducer(state, action);
    expect(newState).toStrictEqual(SHOW_ALL);
  });
  it('action.type===SHOW_ACTIVEの時"SHIW_ACTIVE"を返す', () => {
    const state = createInitialState();

    const action = showActive();
    const newState = visibleFilterReducer(state, action);
    expect(newState).toStrictEqual(SHOW_ACTIVE);
  });
  it('action.type===SHOW_COMPLETEDの時"SHOW_COMPLETED"を返す', () => {
    const state = createInitialState();

    const action = showCompleted();
    const newState = visibleFilterReducer(state, action);
    expect(newState).toStrictEqual(SHOW_COMPLETED);
  });
});
