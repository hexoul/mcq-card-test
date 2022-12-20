import "./App.css";

import { useState } from "react";
import Home from "./components/Home";
import Question from "./components/Question";

const App = () => {
  const [page, setPage] = useState("home");

  switch (page) {
    case "home":
      return <Home onNext={() => setPage("question")} />;
    case "question":
      return <Question />;
    default:
      return <div></div>;
  }
};

export default App;
