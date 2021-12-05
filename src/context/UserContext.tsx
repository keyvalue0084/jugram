import React, { useReducer, useContext, createContext, Dispatch } from "react";
import { V_USER_CONTEXT } from "../var/keywords";
import { toast, ToastContainer } from "react-toastify";

// 상태를 위한 타입
interface State {
  jwt?: string;
  user?: Components.Schemas.UsersPermissionsUser;
}

// 모든 액션들을 위한 타입
type Action =
  | {
      type: "LOGIN";
      user: Components.Schemas.UsersPermissionsUser;
      jwt: string;
    }
  | {
      type: "LOGOUT";
      user?: Components.Schemas.UsersPermissionsUser;
      jwt?: string;
    };

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
  try {
    switch (action.type) {
      case V_USER_CONTEXT.ACTION.LOGIN.NAME:
        if (!sessionStorage.getItem("jwt") && action.jwt) {
          sessionStorage.setItem("jwt", action.jwt);
        }
        return {
          jwt: action.jwt,
          user: action.user
        };
      case V_USER_CONTEXT.ACTION.LOGOUT.NAME:
        sessionStorage.removeItem("jwt");
        return {
          jwt: undefined,
          user: undefined
        };
      default:
        throw new Error("Unhandled action");
    }
  } catch (e) {
    console.error(e);
    toast.success("USER DISPATCH가 실패하였습니다!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500
    });
  }
  return {};
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        <ToastContainer />
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
