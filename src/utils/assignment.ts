// createStore 간단하게 구현해보가
// create Store는 리듀서를 인자로받아 store를 리턴하는 함수이다.
// store는 subscribe(), dispatch(), getState()를 메서드로 가진 객체다.

function todoList(state: any = [], action: any) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    default:
      return state;
  }
}

const createStore = (reducer: any, state: any): any => {
  const storeState = reducer();

  const subscribe = function (callback: VoidFunction = function () {}) {
    return callback;
  }; // store에 변화가 있을 때 실행되는 listener 함수

  const getState = function () {
    return storeState;
  }; // state를 반환하는 함수
  const dispatch = function (action: { type: string; payload: any[] }) {
    const result = reducer(storeState, action.type);

    subscribe();

    return result;
  };

  return { subscribe, getState, dispatch };
};

const store = createStore(todoList, []);

store.getState();
store.subscribe();
store.dispatch({ type: "hello", payload: "" });

// const store = createStore((state, action) => {
//   if (action.type === "ADD") {
//     return { ...state, todos: [...state.todos, action.payload] };
//   }
//   return state;
// });

function test() {}

export default test;
