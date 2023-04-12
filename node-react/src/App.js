import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dummyAction } from "./redux/actions/actions";
import FetchTasks from "./components/FetchTasks";

function App() {

  return <div className="App">
    <FetchTasks />
  </div>;
}

export default App;
