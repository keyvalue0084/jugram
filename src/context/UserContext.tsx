import React, { useReducer, useContext, createContext, Dispatch } from "react";

// 필요한 타입들을 미리 선언
type UserState = Components.Schemas.NewUsersPermissionsUser;

// 상태를 위한 타입
interface State {
  jwt?: string;
  user?: UserState;
}

// 모든 액션들을 위한 타입
type Action =
  | { type: "LOGIN"; user: UserState; jwt: string }
  | { type: "LOGOUT"; user: UserState; jwt: string };

type UserDispatch = Dispatch<Action>;

// Context 만들기
const UserStateContext = createContext<State | null>(null);
const UserDispatchContext = createContext<UserDispatch | null>(null);

const initialState: State = {
  jwt: undefined,
  user: undefined
};

// 리듀서
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOGIN":
      if (!sessionStorage.getItem("jwt")) {
        sessionStorage.setItem("jwt", action.jwt);
      }
      return {
        jwt: action.jwt,
        user: action.user
      };
    case "LOGOUT":
      sessionStorage.removeItem("jwt");
      return {
        jwt: undefined,
        user: undefined
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useUserState() {
  const state = useContext(UserStateContext);
  if (!state) throw new Error("Cannot find UserState"); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useUserDispatch() {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error("Cannot find UserDispatch"); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
