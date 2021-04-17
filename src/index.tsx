import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store, initialState } from "./Store";
// import UserContextProvider from "./Store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <store.Provider value={initialState}>
      <App />
    </store.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <UserContextProvider>
//       <App />
//     </UserContextProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
