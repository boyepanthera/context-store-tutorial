import React, { createContext } from "react";
interface ContextProviderProps {
  children: JSX.Element;
}

interface initialStateInterface {
  firstName: string;
  lastName: string;
}

interface createUserContextInterface {
  firstName: string;
  lastName: string;
}

export const initialState: initialStateInterface = {
  firstName: "Queen",
  lastName: "Shabazz",
};

export const store = createContext<createUserContextInterface>(initialState);
// const { Provider } = store;

// const UserContextProvider = ({ children }: ContextProviderProps) => {
//   return <Provider value={initialState}> {children} </Provider>;
// };

// export default UserContextProvider;
