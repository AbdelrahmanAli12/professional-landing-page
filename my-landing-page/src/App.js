import React from "react";
import Tabs from "./Tabs";
import tabs from "./data";

const App = () => {
  return (
    <div>
      <h1>My Landing Page</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
