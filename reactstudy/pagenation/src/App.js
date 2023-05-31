import React from "react";
import ReactDOM from "react-dom";
import Page from "./components/Page";

function App() {
  return (
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
