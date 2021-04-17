import React, { useState, useContext, FC } from "react";
import { store } from "./Store";

function App() {
  return (
    <div>
      <FirstComponent />
    </div>
  );
}

const FirstComponent: FC<{}> = (): JSX.Element => {
  let user = useContext(store);
  return (
    <>
      <div>My FirstName {user.firstName} </div>
      <div>My LastName {user.lastName} </div>
      <SecondComponent />
    </>
  );
};

const SecondComponent: FC<{}> = (): JSX.Element => {
  let user = useContext(store);
  return (
    <>
      <div>My firstName Again {user.firstName} </div>
      <div>My lastName Again {user.lastName}</div>
    </>
  );
};

export default App;
