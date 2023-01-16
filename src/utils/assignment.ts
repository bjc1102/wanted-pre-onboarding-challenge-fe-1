// createStore 간단하게 구현해보가
// create Store는 리듀서를 인자로받아 store를 리턴하는 함수이다.
// store는 subscribe(), dispatch(), getState()를 메서드로 가진 객체다.

interface Action {
  type: "ADD_TODO";
  text: string;
}

function todoList(state: any = [], action: Action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    default:
      return state;
  }
}

const createStore = function <S, A>(
  reducer: (state: S, action: A) => S,
  preloadedState: S
) {
  const currentReducer = reducer;
  let currentState = preloadedState as S;
  let currentListeners: VoidFunction[] | null = [];
  let nextListeners = currentListeners;

  const getState = function (): S {
    return currentState;
  };
  //상태를 업데이트 해줘야하고 상태를 업데이트 했다면 subscribe에 있는 함수들을 실행시켜준다
  const dispatch = function (action: A): A {
    currentState = currentReducer(currentState, action);
    const listeners = (currentListeners = nextListeners);
    if (listeners) listeners.forEach((listener) => listener());

    return action;
  };

  const subscribe = function (listener: VoidFunction) {
    // subscribe는 dispatch가 호출될 떄마다 실행되는 함수(정확히는 상태가 변경될때마다 실행됨)
    // unsubscribe라는 함수를 반환하며 호출되는 함수를 지울 때 사용
    nextListeners.push(listener);

    return function unsubscribe() {
      const index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  };

  return { getState, dispatch, subscribe };
};

const store = createStore(todoList, []);
console.log(
  store.dispatch(
    store.dispatch({
      type: "ADD_TODO",
      text: "Read the docs",
    })
  )
);
console.log(store.getState());
console.log(store.subscribe(() => {}));

// store.getState();
// store.subscribe();
// store.dispatch({ type: "hello", payload: "" });

// const store = createStore((state, action) => {
//   if (action.type === "ADD") {
//     return { ...state, todos: [...state.todos, action.payload] };
//   }
//   return state;

// });

function test() {}

export default test;
